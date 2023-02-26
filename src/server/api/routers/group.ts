import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const groupRouter = createTRPCRouter({
  postGroup: publicProcedure
    // Input validation
    .input(z.object({
      list: z.array(z.string())
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        // TODO: Generate group and store
        // const group = await ctx.prisma.group.create({ ...  });
        // Note: return group.id
      } catch (error) {
        console.log(error);
      }
      return { groupId: 42 };
    }),
  getGroup: publicProcedure
    // Input validation
    .input(z.object({
      groupId: z.string()
    }))
    .query(({ ctx, input }) => {
      //return ctx.prisma.example.findUnique(input);
      return { group: [
        { passphrase: 'sara-loves-christmas', giver: 'Emma'},
        { passphrase: 'emma-loves-christmas', giver: 'Gina'},
        { passphrase: 'gina-loves-christmas', giver: 'Sadie'},
        { passphrase: 'sadie-loves-christmas', giver: 'Sara'},
      ]}
    }),
});
