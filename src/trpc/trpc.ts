import { ExpressContext } from "@/server";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<ExpressContext>().create()
export const router = t.router

//for public API endpont
export const publicProcedure = t.procedure