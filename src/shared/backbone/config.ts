export const CONFIG = {
  appUniqueKey: '__X402_RS__',
  isClient: typeof window !== 'undefined',
  isServer: typeof window === 'undefined',
  base: process.env.BASE_PATH as string || '/',

  facilitatorUrl: new URL('https://facilitator.x402.rs'),

  contacts: {
    telegramUrl: new URL('https://t.me/x402rs'),
    twitterUrl: new URL('https://x.com/x402rs'),
    githubUrl: new URL('https://github.com/x402-rs'),
    email: 'hello@x402.rs',
  },
};
