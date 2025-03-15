import {Wit,log} from "node-wit"
import * as dotenv from "dotenv";
dotenv.config()

// const actions = {
//   confirm_order(contextMap) {
//     return {context_map: {...contextMap, order_confirmation: 'PIZZA42'}};
//   },
// };

const ClientWit = new Wit({
  accessToken: (process.env.WITAI_CLIENT_ACCESS_TOKEN as string),
  // actions,
  logger: new log.Logger(log.DEBUG), // optional
});

// console.log(client.message('set an alarm tomorrow at 7am'));

export default ClientWit
