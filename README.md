# Secret Krampus

## What's happening?

Go checkout (T3 tutorial)[https://dev.to/nexxeln/build-a-full-stack-app-with-create-t3-app-5e1e]

And (Typescript in 5 minutes)[https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html]

## How to run locally

### Setup local postgres db

Make sure you have docker running on your mashine.

`cp .env.test .env`

`docker-compose -f docker-compose.yml up`

Note: To view the database and it's enries run

`npx prisma studio`

### Run
`npm install`

`npm run db:migrate`

`npm run dev`

Note: You can easily clean the db with `npm run db:clean`

## How to run unit tests (using Jest)

`npm test`

To test a new component, please add a test file with the following format. Location is irrelevent as Jest looks through the whole codebase.

`touch asdf.test.ts`

## T3 boilerplace Info

- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- NOT USED YET: [NextAuth.js](https://next-auth.js.org)

## How to work with SASS (experimental)

Please see [link](https://medium.com/@dandobusiness/adding-sass-scss-to-your-react-typescript-project-162de416b19a)

Add sass file and run `npm run build:css` or `npm run watch:css`

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
