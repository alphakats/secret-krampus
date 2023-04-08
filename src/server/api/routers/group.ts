import { z } from "zod";
import { TRPCError } from '@trpc/server';

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { randomPassphrase } from '~/server/lib/randomPassphrase';
import { shuffle } from '~/server/lib/shuffle';
import type { Draw } from '~/server/lib/shuffle';

interface DrawEnhanced {
  giver: string;
  receiver: string;
  passphrase: string;
}

interface PostGroupReturn {
  groupId: string,
}

const NUMBER_OF_RETRIES = 3;

const retryCreate = (ctx, draws: Draw[], names: string[], numberOfRetry: number): Promise<PostGroupReturn> => {
  return new Promise((resolve, reject) => {

    const retry = async (n: number) => {
      try {
        const enhancedDraws: DrawEnhanced[] = draws.map(
          v => ({...v, passphrase: randomPassphrase(names)})
        );

        const group = await ctx.prisma.group.create({
          data: {
            draws: {
              create: enhancedDraws,
            },
          },
        });
        return resolve({ groupId: group.id });
      } catch (error) {
        if (n === 1) {
          reject(error);
        } else {
          return retry(n - 1);
        }
      }
    }
    return retry(numberOfRetry);
  });
}

export const groupRouter = createTRPCRouter({
  postGroup: publicProcedure
    .input(z.object({
      list: z.array(z.string())
    }))
    .mutation(({ ctx, input }) => {
      // clean input
      input.list = input.list.filter(n => n);
      
      const res: Draw[] = shuffle(input.list);

      // Retry behavior due to passphrase needing to be unique
      return retryCreate(ctx, res, input.list, NUMBER_OF_RETRIES)
        .then((res: PostGroupReturn) => {
          return res;
        })
        .catch(error => {
          console.log(error);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: error,
          });
        });
    }),

  getGroup: publicProcedure
    .input(z.object({
      groupId: z.string()
    }))
    .query(async ({ ctx, input }) => {
      const group = await ctx.prisma.group.findUnique({
        where: { id: input.groupId },
        include: { draws: true },
      });

      if (group) {
        const filtered = group.draws
          .map(obj => {
            return {
              giver: obj['giver'],
              receiver: obj['receiver'],
              passphrase: obj['passphrase'],
            };
          });
        return { group: filtered };
      } else {
        throw new TRPCError({
          code: 'NOT_FOUND',
        });
      }
    }),
});
