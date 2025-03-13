const { bottender } = require('bottender');

const app = bottender();
const { router } = app;

router.use(async (context) => {
  if (context.event.isVerify) {
    // Mengembalikan hub.challenge untuk verifikasi webhook
    context.res.status(200).send(context.event.query['hub.challenge']);
    return;
  }
  await context.sendText('Hello, World!');
});

const handle = app.getRequestHandler();

module.exports = async (req, res) => {
  await handle(req, res);
};