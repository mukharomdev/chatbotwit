import type {ContextApp} from "chatbotwit"
import ClientWit from "./witconfig"
import Converse from "./converse";
import { log } from "console";
import HandleIntent from "./intent";
import HandleEntity from "./entity";

export default async function Message(context:ContextApp){
	if (context.event.isText){
   const userMessage = context.event.text;
   let ctx = await Converse(context)
   log("context_map message :",ctx)
    // Kirim pesan ke Wit.ai untuk diproses
    const intents= await HandleIntent(ClientWit,userMessage,ctx)
    const entities = await HandleEntity(ClientWit,userMessage,ctx)
    // Ambil intent dan entities dari respons Wit.ai
    const intent = intents[0]?.name || 'unknown';
  
        // Berikan respons berdasarkan intent
    switch (intent) {
      case 'greeting':
        await context.sendText('Halo! silahkan sebutkan pesanan anda?');
        break;
      case 'order':
        const food = entities['food_type:food_type']?.[0]?.value || 'unknown';
        await context.sendText(`pesanan ${food} anda sedang disiapkan.`)
        break ;
      default:
        await context.sendText('Maaf, saya tidak mengerti maksud Anda.');
        break;
    }

  }

}