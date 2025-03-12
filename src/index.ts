import type {ContextApp} from 'chatbotwit'

async function  App(context:ContextApp){
  await context.sendText('Hello, World!');
};

export default App; // Pastikan app di-export