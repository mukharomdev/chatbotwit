import {Wit,WitOption,log} from "node-wit"
import ContextMAP from "./contextMap";
import * as dotenv from "dotenv";
dotenv.config()

/* Handle action for bot */
const actions = {
  confirm_order(contextMap:any) {
    
    return {context_map: {...contextMap, ContextMAP}};
  },
};
// const actions = {};


// config wit client
const WitConfig = {
  accessToken: (process.env.WITAI_CLIENT_ACCESS_TOKEN as string),
  actions,
  // logger: new log.Logger(log.DEBUG), // optional
}

function witClient(wit:typeof Wit,config:WitOption){
  if(typeof wit != "function"){
    throw new Error("Harus berupa class Wit")
  }

  if(typeof config != "object"){
    throw new Error("harus berupa Object ")
  }
  const clientWit = new wit(config)

  return clientWit
}


// instance Wit
const ClientWit = witClient(Wit,WitConfig);

// console.log(client.message('set an alarm tomorrow at 7am'));

export default ClientWit
