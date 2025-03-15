import type {ContextApp} from 'chatbotwit'
import ClientWit from '@nlp/index'

async function  App(context:ContextApp):Promise<void>{
  //console.log(context.event);
try{
  await context.sendText('Hello, World!');
} catch(error){
console.log("error",error);
}
};

export default App; // Pastikan app di-export