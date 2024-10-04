//secure variables, for database client for the entire app
import dotenv from "dotenv"
import path from "path"
import type { InitOptions } from "payload/config"
import payload, { Payload } from "payload"
import { error } from "console"

dotenv.config({
    path: path.resolve(__dirname, "../.env") //from the current dir, go back outside src folder to get into env file
})

//to  get client, we want to use cashing
let cached = (global as any).payload
if (!cached) {
    cached = (global as any).payload = {
        client:null,
        promise:null,
    }
}


//to construct the connection of client input to DB
interface Args {
    initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async({
    initOptions
}: Args = {}): Promise<Payload> => {
    //to sign all the authentication for example Json web token 
    if(!process.env.PAYLOAD_SECRET){
        throw new Error("PAYLOAD_SECRET is missing")
    }
    if(cached.client) {
        return cached.client
    }
    if(!cached.promise) {
        cached.promise = payload.init({
            secret : process.env.PAYLOAD_SECRET,
            local: initOptions?. express ? false : true,
            ...(initOptions || {}),
        })
    }
    try {
        cached.client = await cached.promise
    } catch (e: unknown) {
        cached.promise = null
        throw e
    }

    return cached.client
} 