/**
 * message
 */
import type {ContextApp} from "chatbotwit"
import ClientWit from "./witconfig"
import contextMap from "./contextMap";
import { WitContext } from "node-wit";
export default async function Message(context:ContextApp){
	if (context.event.isText){
   const userMessage = context.event.text;
   const cMap:WitContext = {state:[JSON.stringify(contextMap)]}
    // Kirim pesan ke Wit.ai untuk diproses
    const witResponse = await ClientWit.message(userMessage,cMap)

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
      case 'weather':
        const location = entities['location:location']?.[0]?.value || 'unknown';
        await context.sendText(`Cuaca di ${location} sedang cerah.`);
        break;
      default:
        await context.sendText('Maaf, saya tidak mengerti maksud Anda.');
        break;
    }

  }

}