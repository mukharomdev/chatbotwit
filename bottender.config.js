module.exports = {
    channels: {
      messenger: {
        enabled: true,
        path: '/webhooks/messenger',
        pageId: process.env.MESSENGER_PAGE_ID,
        accessToken: process.env.MESSENGER_ACCESS_TOKEN,
        appId: process.env.MESSENGER_APP_ID,
        appSecret: process.env.MESSENGER_APP_SECRET,
        verifyToken: process.env.MESSENGER_VERIFY_TOKEN,

        profile: {
          greeting: [
          {
            locale: 'default',
            text: 'Hello {{user_first_name}}! Welcome to My Bot',
          },
        ],

        getStarted: {
          payload: 'GET_STARTED',
        },

        persistentMenu: [
          {
            locale: 'default',
            composerInputDisabled: false,
            callToActions: [
              {
                type: 'postback',
                title: 'Ngobrol dengan Bot',
                payload: 'CARE_HELP',
              },
              {
                type: 'postback',
                title: 'Hiburan',
                payload: 'CURATION',
              },
              {
                type: 'web_url',
                title: 'klik blog saya',
                url: 'https://mukharomdev.github.io',
                webviewHeightRatio: 'full',
              },
            ],
          },
        ],

        iceBreakers: [
          {
            question: '<QUESTION>',
            payload: '<PAYLOAD>',
          },
          {
            question: '<QUESTION>',
            payload: '<PAYLOAD>',
          },
        ],
      },
    
    }  
  }
}