'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Link from 'next/link'
export default function Welcome() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <><h1 className='text-white'>Velkommen til!</h1><Link className='text-white' href="signup">Tilmeld</Link></>

        );
    }

    return (
        <h1 className='text-white'>Logget ind</h1>
    );
}

// This will ensure the page requires authentication
Welcome.requireAuth = false;