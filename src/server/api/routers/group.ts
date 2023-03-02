import { z } from "zod";
import { TRPCError, initTRPC } from '@trpc/server';

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { randomPassphrase } from '~/server/lib/randomPassphrase';
import { shuffle } from '~/server/lib/shuffle';
import type { Draw } from '~/server/lib/shuffle';

export const groupRouter = createTRPCRouter({
  postGroup: publicProcedure
    .input(z.object({
      list: z.array(z.string())
    }))
    .mutation(async ({ ctx, input }) => {
      const res: Draw = shuffle(input.list);
      const draws = res.map(
        v => ({...v, passphrase: randomPassphrase()})
      );

      try {
        const group = await ctx.prisma.group.create({
          data: {
            draws: {
              create: draws,
            },
          },
        });
        return { groupId: group.id }
      } catch (error) {
        console.log(error);
        // TODO: centeralize error codes
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: error,
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

      // TODO: Filter out unecessery fields
      return { group: group.draws };
    }),
});
