import header from '@/styles/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from "next/router";


export default function Header() {
    const path = useRouter().asPath;
    console.log(path);
    return (
        <Link className={header.header} href="/">
            <Image className={header.img} src={path == '/' ? "./Logo.png" : "../Logo.png"} alt="Ir ao menu" width={500} height={500} />
            <div className={header.title}>Rebelião sob Discórdia</div>
        </Link>
    );
}
