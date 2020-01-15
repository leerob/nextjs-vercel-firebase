> _Next 9 Update_: The preferred way to handle this now is with [API routes](https://nextjs.org/docs/api-routes/introduction) (e.g., `/pages/api/cities.js`) and [bracket notation](https://nextjs.org/docs/routing/dynamic-routes) (e.g., `/pages/[city].js`). This prevents the need for a Monorepo, as everything can be contained inside one application. It also removes the complexity of having a custom server, dealing with CORS, and configuring routes via Now. 

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
