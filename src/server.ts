
//to create admin dashboard

import express from "express"
import { getPayloadClient } from "./get-payload"
import { nextHandler } from "./next-utils"
import { nextApp } from "./next-utils"
import * as trpcExpress from "@trpc/server/adapters/express"
import { appRouter } from "./trpc"
import { inferAsyncReturnType } from "@trpc/server"

//start the server
const app = express ()
const PORT = Number(process.env.PORT) || 3000

const createContext = ({
    req, 
    res,
}: trpcExpress.CreateExpressContextOptions) => ({
    req, 
    res,
})

export type ExpressContext = inferAsyncReturnType<typeof createContext>

const start = async() => {
    const payload = await getPayloadClient({
        initOptions : {
            express: app,
            onInit: async(cms) => {
                //log out the URL where the Admin dashboard will live
                cms.logger.info(`Admin URL ${cms.getAdminURL()}`)
            },
        },
    })

    app.use(
        '/api/trpc', 
        trpcExpress.createExpressMiddleware({
            router: appRouter,
            createContext,
        })
    )

    //independent host from vercel
    app.use((req, res) => nextHandler(req, res))

    nextApp.prepare().then(()=>{
        payload.logger.info('Next.js started')
        
        app.listen(PORT, async ()=> {
            payload.logger.info(`Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
            )
        })
    })
}

start ()