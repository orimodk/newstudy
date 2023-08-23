import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react';

interface LogoProps {
    logoSize: number;
}

const Logo: FC<LogoProps> = ({ logoSize }) => {
    return (
        <div className='flex justify-center items-center'><Link href="/"><Image src="/next.svg" width={logoSize} height={logoSize} alt="logo" className='py-3' priority={true} /></Link></div>
    );
}

export default Logo;