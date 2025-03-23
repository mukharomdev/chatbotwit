# server

https://chatbotwit.vercel.app

# tech stack

- bottenderjs
- express
- node-wit (wit.ai)
- typescript

# build and run

```terminal
$ pnpm start   # production
$ pnpm dev	   # development
```

# tunneling using ngrok

```terminal
$ pnpm ngrok
```

# setup webhook (ex. using facebook messenger platform)

Pastikan sudah memilik akun meta developer dan mempunyai client token sesuai dengan apa yang ada di  ``env-sample``

```terminal
$ npx bottender messenger webhook set    https://blabla.ngrok.app/webhooks/messenger
```