import type {ContextApp} from "chatbotwit"
// import Message from "./message"
import ClientWit from "./witconfig"


function handleContextMap(ctx:any):WitContext { 
   
    let Obj = {[ ctx ]:ctx}
  
    return {state:[JSON.stringify(Obj)]}
}
import { WitContext } from "node-wit"

export default async function Converse(context:ContextApp):Promise<any>{
    
    const messageText = context.event.text
    let contextText = {}
    // Fungsi untuk memproses pesan
    async function process_message(text:string, ctx={}){
        const WitResponse = ClientWit.message(messageText,ctx)
        const Response = await WitResponse
        //console.log("Wit.ai Response:",Response)
        
        // Update context berdasarkan respons
        let new_context = handleContextMap(Response.intents[0].name)
        return new_context
    
    }
        
    
    contextText = await process_message(messageText,contextText)
	//console.log(contextText)
     
    // try {    
    //     await context.sendText(JSON.stringify(contextText))        
    // } catch(err){
    //     console.log(err);        
    // }
     
    return Promise.resolve(contextText)
    
}