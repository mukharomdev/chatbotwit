import bodyParser from 'body-parser';
import express from 'express';
import { bottender } from 'bottender';

const app = bottender({
  dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 5000;

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    bodyParser.json({
      verify: (req, _, buf) => {
        (req as any).rawBody = buf.toString();
      },
    })
  );
   // Serve favicon.png
     server.get('/favicon.png', (req, res) => {
         res.status(204).end();
     });
   // Serve favicon.ico
     server.get('/favicon.ico', (req, res) => {
         res.status(204).end();
     });

  server.get('/', (req, res) => {
    res.json({ ok: true });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});




