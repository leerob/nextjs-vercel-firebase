import 'server-only';
import { notFound } from 'next/navigation';
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
  });
}

const db = admin.firestore();

export default async function Page() {
  const user = await db.collection('users').doc('leerob').get();

  if (!user.exists) {
    notFound();
  }

  return <div>Hello, {user.data().name}!</div>;
}
