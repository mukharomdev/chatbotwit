const { bottender } = require('bottender');
   const { createServer } = require('http');

   const app = bottender({
     dev: process.env.NODE_ENV !== 'production',
   });

   const handle = app.getRequestHandler();

   app.prepare().then(() => {
     createServer((req, res) => {
       handle(req, res);
     }).listen(process.env.PORT || 3000, (err) => {
       if (err) throw err;
       console.log('> Ready on http://localhost:3000');
     });
   });