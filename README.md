# Secret Krampus

## What's happening?

Go checkout `https://dev.to/nexxeln/build-a-full-stack-app-with-create-t3-app-5e1e`

And `https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html`

## How to run locally (using sqlite)

`cp .env.test .env`

`npm install`

`npx prisma db push`

`npm run dev`

## How to run unit tests (using Jest)

`npm test`

To test a new component, please add a test file with the following format. Location is irrelevent as Jest looks through the whole codebase.

`touch asdf.test.ts`

## T3 boilerplace Info

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
