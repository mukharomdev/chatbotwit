const { router, messenger } = require('bottender/router');
import type {ContextApp} from "chatbotwit"
import { HandleMessage } from "./messenger"
import {Message} from "./nlp"

async function  App(context:ContextApp):Promise<void>{

console.log(context.platform);
try {

	switch(context.platform){
		case "messenger":
			return router([
				    messenger.message(HandleMessage),
				    messenger.any(HandleMessage),
				  ])
		  break;
		  default:		  
		  	await Message(context)
  	}		  
  } catch(error){
    console.log("error",error);
  }
};

export default App; // Pastikan app di-export