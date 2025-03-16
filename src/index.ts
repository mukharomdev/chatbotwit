import type {ContextApp} from "chatbotwit"
import ClientWit from "./nlp"

async function  App(context:ContextApp):Promise<void>{
  
try{
 
  
  ClientWit.message(context.event.text,{})
  .then((res)=>{
    const intent = res['intents']
    //console.log(JSON.stringify(res))
    return intent
  })
  .then((intents)=>{
    let int = intents[0]
    let stringInt = JSON.stringify(int)
    console.log(stringInt)
   context.sendText(stringInt);
  })
  
  
  
  
} catch(error){
console.log("error",error);
}
};

export default App; // Pastikan app di-export