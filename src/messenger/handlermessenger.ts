import type {ContextApp} from "chatbotwit"
import {Message,Converse} from "./../nlp" 


export async function HandleMessage(context:ContextApp) {
  await Converse(context)
  // hiawait Message(context)
}