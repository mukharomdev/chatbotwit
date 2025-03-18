# Messenger Routing

```javascript

const { router, messenger } = require('bottender/router');

function App() {
  return router([
    messenger.message(HandleMessage),
    messenger.accountLinking.linked(HandleAccountLinkingLinked),
    messenger.accountLinking.unlinked(HandleAccountLinkingUnlinked),
    messenger.accountLinking(HandleAccountLinking),
    messenger.delivery(HandleDelivery),
    messenger.echo(HandleEcho),
    messenger.gamePlay(HandleGamePlay),
    messenger.passThreadControl(HandlePassThreadControl),
    messenger.takeThreadControl(HandleTakeThreadControl),
    messenger.requestThreadControl(HandleRequestThreadControl),
    messenger.appRoles(HandleAppRoles),
    messenger.optin(HandleOptin),
    messenger.policyEnforcement(HandlePolicyEnforcement),
    messenger.postback(HandlePostback),
    messenger.reaction.react(HandleReactionReact),
    messenger.reaction.unreact(HandleReactionUnreact),
    messenger.reaction(HandleReaction),
    messenger.read(HandleRead),
    messenger.referral(HandleReferral),
    messenger.standby(HandleStandby),
    messenger.any(HandleMessenger),
  ]);
}

/* Note: You need to implement those functions */
async function HandleMessage(context) {}
async function HandleAccountLinkingLinked(context) {}
async function HandleAccountLinkingUnlinked(context) {}
async function HandleAccountLinking(context) {}
async function HandleDelivery(context) {}
async function HandleEcho(context) {}
async function HandleGamePlay(context) {}
async function HandlePassThreadControl(context) {}
async function HandleTakeThreadControl(context) {}
async function HandleRequestThreadControl(context) {}
async function HandleAppRoles(context) {}
async function HandleOptin(context) {}
async function HandlePolicyEnforcement(context) {}
async function HandlePostback(context) {}
async function HandleReactionReact(context) {}
async function HandleReactionUnreact(context) {}
async function HandleReaction(context) {}
async function HandleRead(context) {}
async function HandleReferral(context) {}
async function HandleStandby(context) {}
async function HandleMessenger(context) {}

```