import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { publicProcedure } from "../trpc";
export const postRouter = publicProcedure
  .input(
    z.object({
      cityId: z.string(),
    })
  )
  .query(async ({ input }) => {
    const test = await fetch(
      `https://weather.tsukumijima.net/api/forecast?city=${input.cityId}`
    );
    const data = await test.json();
    return {
      greeting: `Hello ${data.title}`,
    };
  });

export type AdminAppRouter = typeof postRouter;
