import header from '@/styles/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()
    return (
        <Link className={header.header} href="/">
            <Image className={header.img} src="./Logo.png" alt="Ir ao menu" width={500} height={500} />
            <div className={header.title}>Rebelião sob Discórdia {pathname != '/' ? ' ←' : null}</div>
        </Link>
    );
}
