'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'

export default function Header() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <header className='fixed flex w-full bg-white items-center justify-center shadow-lg'>
                <div className='container flex justify-between'>
                    <div className='flex justify-center items-center'><Link href="/"><span>LOGO</span></Link></div>
                    <nav
                        className=" items-center justify-between py-2 md:flex-wrap md:justify-start "
                        data-te-navbar-ref>
                        <Link className='text-black hover:text-blue-200' href="/signup">Tilmeld</Link> / <Link className='text-black hover:text-blue-200' href="/signin">Login</Link>
                    </nav>
                </div>
            </header>

        );
    }

    return (
        <header className='fixed flex w-full bg-white items-center justify-center shadow-lg'>
            <div className='container flex justify-between'>
                <div className='flex justify-center items-center'><Link href="/"><span>LOGO</span></Link></div>
                <nav
                    className=" items-center justify-between py-2 md:flex-wrap md:justify-start "
                    data-te-navbar-ref>
                         <Link className='text-black hover:text-blue-200' href="/profile">Din profil</Link> / 
                    <button className='' onClick={() => signOut()}> Logud</button>
                </nav>
            </div>
        </header>
    );
}

// This will ensure the page requires authentication
Header.requireAuth = false;