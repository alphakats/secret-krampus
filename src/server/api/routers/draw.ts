import { z } from "zod";
import { TRPCError } from '@trpc/server';

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const drawRouter = createTRPCRouter({
  getDraw: publicProcedure
    .input(z.object({
      passphrase: z.string()
    }))
    .query(async ({ ctx, input }) => {
      const draw = await ctx.prisma.draw.findUnique({
        where: { passphrase: input.passphrase },
      });


      if (draw) {
        return { reciver: draw.reciever };
      } else {
        throw new TRPCError({
          code: 'NOT_FOUND',
        });
      }
    }),
});
