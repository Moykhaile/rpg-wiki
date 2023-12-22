import header from '@/styles/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <Link className={header.header} href="/">
            <Image className={header.img} src="./Logo.png" alt="Ir ao menu" width={500} height={500} />
            <div className={header.title}>Rebelião sob Discórdia</div>
        </Link>
    );
}
