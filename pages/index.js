import { Suspense } from 'react';
import useSWR from 'swr';

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

function Profile() {
  const { data } = useSWR('/api/user', fetcher, { suspense: true });
  return <div>Hello, {data.name}!</div>;
}

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Profile />
    </Suspense>
  );
}
