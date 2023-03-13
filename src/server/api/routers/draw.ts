import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const drawRouter = createTRPCRouter({
  getDraw: publicProcedure
    // Input validation
    .input(z.object({
      passphrase: z.string()
    }))
    .query(({ ctx, input }) => {
      //return ctx.prisma.example.findUnique(input);
      return { reciever: 'Emma the pretty \u2728' };
    }),
});
