import type {ContextApp} from "chatbotwit"
import {Message,Converse} from "./../nlp" 


export async function HandleMessage(context:ContextApp) {
  
  await Message(context)
}