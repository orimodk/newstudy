'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/welcome');
    },
  });
  return (
    <div>
      <div className='text-white'>{session?.data?.user?.email }</div>
      <button className='text-white' onClick={() => signOut()}>Log ud
      </button>
    </div>
  )
}

Home.requireAuth = true