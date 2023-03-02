import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const drawRouter = createTRPCRouter({
  getDraw: publicProcedure
    .input(z.object({
      passphrase: z.string()
    }))
    .query(async ({ ctx, input }) => {
      const draw = await ctx.prisma.draw.findUnique({
        where: { passphrase: 'sara-loves-christmas' }//input.passphrase },
      });

      return { reciver: draw.receiver };
    }),
});
