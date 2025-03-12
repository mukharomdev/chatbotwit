import { ConsoleContext, MessengerContext } from "bottender"



declare module "chatbotwit" {
    export type ContextApp = ConsoleContext| MessengerContext  ;
  }