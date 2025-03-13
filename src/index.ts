import type {ContextApp} from 'chatbotwit'

async function  App(context:ContextApp):Promise<void>{
  //console.log(context.event);
try{
  await context.sendText('Hello, World!');
} catch(error){
alert("error",error);
}
};

export default App; // Pastikan app di-export