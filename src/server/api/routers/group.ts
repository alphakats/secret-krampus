import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError, initTRPC } from '@trpc/server';

// TODO: Replace with sentence generator
const randomPassphrase: string = () => {
  return (Math.random() + 1).toString(36).substring(7);
};

export const groupRouter = createTRPCRouter({
  postGroup: publicProcedure
    .input(z.object({
      list: z.array(z.string())
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        const group = await ctx.prisma.group.create({
          data: {
            draws: {
              create: [
                {
                  passphrase: randomPassphrase(),
                  giver: 'Emma',
                  receiver: 'Sara',
                },
              ],
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
