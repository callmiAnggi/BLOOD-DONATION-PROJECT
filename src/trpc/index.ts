import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";

//to define the custom type save API
export const appRouter = router({
    auth: authRouter,
})

export type AppRouter = typeof appRouter