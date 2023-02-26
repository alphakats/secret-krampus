import { createTRPCRouter } from "~/server/api/trpc";
import { groupRouter } from "~/server/api/routers/group";
import { drawRouter } from "~/server/api/routers/draw";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  group: groupRouter,
  draw: drawRouter, 
});

// export type definition of API
export type AppRouter = typeof appRouter;
