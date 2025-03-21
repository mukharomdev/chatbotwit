import {Wit,log} from "node-wit"
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

// instance Wit
const ClientWit = new Wit(WitConfig);

// console.log(client.message('set an alarm tomorrow at 7am'));

export default ClientWit
