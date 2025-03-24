import { ConsoleContext, MessengerContext } from "bottender"
import {Wit} from "node-wit"


declare module "node-wit"{
  export interface Wit {
    event():Promise<void> 
  }

}

declare module "chatbotwit" {
    export type ContextApp = ConsoleContext| MessengerContext ;
    export type WitClient = any;
  }

Wit.prototype.event = async function ():Promise<void>{
  return Promise.resolve();
}