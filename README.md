# Next.js + Now + Firebase

> An example of a Monorepo to deploy a Firebase Node API alongside a Next.js app.

## Built With

-   [Next.js](https://nextjs.org/)
-   [Now](https://zeit.co/now)
-   [Firebase](https://firebase.google.com)

## Running Locally

### Setup

1. Create a project in [Firebase](https://firebase.google.com/docs/firestore/quickstart).
1. You will need to add your Firebase Service Account in `/app/.firebase/service-account.json`.
1. Update your `databaseURL` in `server.js`.
1. Modify the route in `routes/api/index.js` to match your database structure.
1. `now.json` as well as `/pages/city.js` can then be modified to match your database structure.

### Start API Server

```
$ now dev
```

Next.js app + API available at http://localhost:3000.

## Deploying

From the root directory.

```
$ now --target production
```
