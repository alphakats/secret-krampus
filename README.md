# Secret Krampus

## What's happening?

Go checkout (T3 tutorial)[https://dev.to/nexxeln/build-a-full-stack-app-with-create-t3-app-5e1e]

And (Typescript in 5 minutes)[https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html]

## How to run locally

### Setup local postgres db
`cp .env.test .env`

`docker-compose -f docker-compose.yml up`

Note: To view the database and it's enries run

`npx prisma studio`

### Run
`npm install`

`npx prisma db push` or `npm run db:reset`

`npm run dev`

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

