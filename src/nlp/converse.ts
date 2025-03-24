import type {ContextApp,WitClient} from "chatbotwit"
import HandleIntent from "./intent"
// import HandleEntity from "./entity"
import ClientWit from "./witconfig"
import HandleEntity from "./entity"


async function handleContextMap(intent:any,entity:any):Promise<any>{
    console.log("intent :",intent[0].name)
    //  console.log("entiti :",entity)
    let arrayEntiti:any = []
     const objectEntiti = Object.entries(entity)[0].forEach(element => {
         if(Array.isArray(element))arrayEntiti.push(element)
        
     });

    const entValue:any = arrayEntiti[0]
    
    let ctx = {
        [entValue[0].name]:entValue[0].value
    }
    // let context = JSON.stringify(ctx,null,2)
    let context = {...ctx}
    return Promise.resolve(context)
}

// Fungsi untuk memproses pesan
async function process_message(clwit:WitClient,msg:string,ctx={}){
    const respIntent = await HandleIntent(clwit,msg,ctx)  
    const restEntity = await HandleEntity(clwit,msg,ctx)  
    // Update context berdasarkan respons
    let new_context = await handleContextMap(respIntent,restEntity)        
    return new_context
}
export default async function Converse(context:ContextApp):Promise<any>{
    const messageText = context.event.text
    let contextText = {}
    try {
        contextText = await process_message(ClientWit,messageText,contextText)
    } catch(e:any){
        throw new Error(e)
    }
    
    return Promise.resolve(contextText)
    
}