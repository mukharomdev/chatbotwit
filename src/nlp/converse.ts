import type {ContextApp} from "chatbotwit"
import ClientWit from "./witconfig"


function handleContextMap(ctx:any){
    let regex = "/,/g"
    let context = {context:[...ctx].join("").replace(regex,'')}
    return JSON.stringify(context)
}

export default async function Converse(context:ContextApp):Promise<any>{
    
    const messageText = context.event.text
    let contextText = {}
    
  // Fungsi untuk memproses pesan
    async function process_message(text:string, ctx={}){
        const WitResponse = ClientWit.message(text,ctx)
        const Response = await WitResponse
        //console.log("Wit.ai Response:",Response)
    
    // Update context berdasarkan respons
        let new_context = handleContextMap(Response.intents[0].name)
        
        return new_context

    }
         
    contextText = await process_message(messageText,contextText)
    return Promise.resolve(contextText)
    
}