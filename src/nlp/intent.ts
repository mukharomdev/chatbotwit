import { WitClient } from "chatbotwit";


export default async function HandleIntent(clientwit:WitClient,message:string,ctx = {}):Promise<any>{
    const witResponse = await clientwit.message(message,ctx)
    return Promise.resolve(witResponse.intents)
}