import type {ContextApp} from 'chatbotwit'

async function  App(context:ContextApp):Promise<void>{
  console.log(context.event);
  await context.sendText('Hello, World!');
};

export default App; // Pastikan app di-export