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

export const groupRouter = createTRPCRouter({
  postGroup: publicProcedure
    .input(z.object({
      list: z.array(z.string())
    }))
    .mutation(async ({ ctx, input }) => {

      try {
        // clean input
        input.list = input.list.filter(n => n);

        const res: Draw[] = shuffle(input.list);
        const draws: DrawEnhanced[] = res.map(
          v => ({...v, passphrase: randomPassphrase(input.list)})
        );

        // TODO: Make sure password is unique before creating
        const group = await ctx.prisma.group.create({
          data: {
            draws: {
              create: draws,
            },
          },
        });
        return { groupId: group.id };
      } catch (error) {
        console.log(error);
        // TODO: centeralize error codes
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
        });
      }
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
