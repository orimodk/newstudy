'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });
  return (
    <div className="pt-8">
      <div className='text-white'>Dit profilnavn er {session?.data?.user?.email}</div>
    </div>
  )
}

Home.requireAuth = true