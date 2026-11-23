# clickjacking-poc

A defensive, educational example of browser frame protection. The mock account
action changes no state, and the app sends no messages to a parent window.

The target deliberately blocks embedding with
`Content-Security-Policy: frame-ancestors 'none'` and
`X-Frame-Options: DENY`. Browsers enforce these response headers when a page
is requested inside a frame, including a frame hosted on another origin. This
project does not include a deceptive overlay or an embedded third-party page.

## Run locally

```sh
pnpm install
pnpm dev -- --port 3001
```

Open [http://localhost:3001](http://localhost:3001). The visible mock action
only displays a confirmation that no account state changed.

## Deploy to Vercel

Import the repository into Vercel and deploy with the default Next.js settings.
No environment variables are required. The frame-protection headers are
configured in `next.config.ts` and apply to every route.
