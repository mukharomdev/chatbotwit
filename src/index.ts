import type {ContextApp} from "chatbotwit"
import { Message } from "./nlp"

async function  App(context:ContextApp):Promise<void>{

try {
  await Message(context)

} catch(error){
    console.log("error",error);
  }
};

export default App; // Pastikan app di-export