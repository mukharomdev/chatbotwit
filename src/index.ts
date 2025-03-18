const { router, messenger } = require('bottender/router');
import type {ContextApp} from "chatbotwit"
import { HandleMessage } from "./messenger"
import {Message} from "./nlp"

async function  App(context:ContextApp):Promise<void>{
try {
	if(context.platform == "messenger"){
	console.log(context.platform);
    return router([
    messenger.message(HandleMessage),
    messenger.any(HandleMessage),
  ]);
		  } else {
		  	console.log(context.platform);
		  	await Message(context)
		  }
		  
  } catch(error){
    console.log("error",error);
  }
};

export default App; // Pastikan app di-export