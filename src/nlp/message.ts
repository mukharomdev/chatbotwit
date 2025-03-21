import type {ContextApp} from "chatbotwit"
import ClientWit from "./witconfig"
import Converse from "./converse";
import { log } from "console";

export default async function Message(context:ContextApp){
	if (context.event.isText){
   const userMessage = context.event.text;
   let ctx = await Converse(context)
   log(ctx)
    // Kirim pesan ke Wit.ai untuk diproses
    const witResponse = await ClientWit.message(userMessage,ctx)

    // Ambil intent dan entities dari respons Wit.ai
    const intent = witResponse.intents[0]?.name || 'unknown';
    const entities = witResponse.entities;
        // Berikan respons berdasarkan intent
    switch (intent) {
      case 'greeting':
        await context.sendText('Halo! Ada yang bisa saya bantu?');
        break;
      case 'order_pizza':
        const pizza = entities['pizza_type:pizza_type']?.[0]?.value || 'unknown';
        await context.sendText(`pesanan ${pizza} anda sedang disiapkan.`)
        break ;
      default:
        await context.sendText('Maaf, saya tidak mengerti maksud Anda.');
        break;
    }

  }

}