import type {ContextApp} from "chatbotwit"
import ClientWit from "./witconfig"
import Message from "./message"
import contextMap from "./contextMap"
import type { WitContext } from "node-wit"

export default async function Converse(context:ContextApp){
    const sessionID = context.session?.id
    const messageText = context.event.text
    const cMap:WitContext = {state:[JSON.stringify(contextMap)]}
	const WitResponse = ClientWit.converse(sessionID,messageText,cMap)
    console.log(WitResponse)
}