import { db } from '../../lib/firebase';

export default async function handler(req, res) {
  const user = await db.collection('users').doc('leerob').get();

  if (!user.exists) {
    return res.status(404).json({});
  }

  return res.status(404).json({ id: user.id, ...user.data() });
}
