import type {ContextApp} from 'chatbotwit'

async function  App(context:ContextApp):Promise<void>{
  await context.sendText('Hello, World!');
};

export default App; // Pastikan app di-export