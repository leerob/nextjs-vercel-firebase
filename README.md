# Next.js + Vercel + Firebase

> Next.js app using API routes to connect with Firestore.

## Built With

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [Firebase](https://firebase.google.com)

## Running Locally

### Setup

1. Create a project in [Firebase](https://firebase.google.com/docs/firestore/quickstart).
1. Download your Firebase Service Account.
1. Create a new file `.env.local` and add environment variables (see `.env` for example).
1. Modify the API route to match your database structure.

### Run Locally

```
$ vc dev
```

Next.js app + API available at http://localhost:3000.

## Deploying

From the root directory.

```
$ vc --prod
```
