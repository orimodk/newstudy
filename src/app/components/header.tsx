'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import Logo from '../components/logo'
import { FC } from 'react';

const Header: FC = (requireAuth) => {
    const { data: session } = useSession();

    if (!session) {
        return (
            <header className='fixed flex w-full bg-white items-center justify-center shadow-lg'>
                <div className='container flex justify-between'>
                    <Logo logoSize={225} />
                    <nav
                        className=" items-center justify-between py-2 md:flex-wrap md:justify-start flex"
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
                    <Logo logoSize={225} />
                <nav
                    className=" items-center justify-between py-2 md:flex-wrap md:justify-start flex"
                    data-te-navbar-ref>
                         <Link className='text-black hover:text-blue-200' href="/profile">Din profil</Link> / 
                    <button className='' onClick={() => signOut()}> Logud</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;