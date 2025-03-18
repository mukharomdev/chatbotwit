import type {ContextApp} from "chatbotwit"
import {Message} from "./../nlp" 

// export default async function Messenger(context:ContextApp) {
//   return router([
//     messenger.message(HandleMessage),
//     messenger.accountLinking.linked(HandleAccountLinkingLinked),
//     messenger.accountLinking.unlinked(HandleAccountLinkingUnlinked),
//     messenger.accountLinking(HandleAccountLinking),
//     messenger.delivery(HandleDelivery),
//     messenger.echo(HandleEcho),
//     messenger.gamePlay(HandleGamePlay),
//     messenger.passThreadControl(HandlePassThreadControl),
//     messenger.takeThreadControl(HandleTakeThreadControl),
//     messenger.requestThreadControl(HandleRequestThreadControl),
//     messenger.appRoles(HandleAppRoles),
//     messenger.optin(HandleOptin),
//     messenger.policyEnforcement(HandlePolicyEnforcement),
//     messenger.postback(HandlePostback),
//     messenger.reaction.react(HandleReactionReact),
//     messenger.reaction.unreact(HandleReactionUnreact),
//     messenger.reaction(HandleReaction),
//     messenger.read(HandleRead),
//     messenger.referral(HandleReferral),
//     messenger.standby(HandleStandby),
//     messenger.any(HandleMessage),
//   ]);
// }


export async function HandleMessage(context:ContextApp) {
  await Message(context)
}