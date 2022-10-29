import { publicProcedure, router } from "../trpc";
import { postRouter } from "./post";
import { z } from "zod";
export const appRouter = router({
  healthcheck: publicProcedure.query(() => "yay!"),
  hello: postRouter,
});

export type AppRouter = typeof appRouter;
