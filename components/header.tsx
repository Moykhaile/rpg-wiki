import header from '@/styles/header.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <a className={header.header} href="/">
            <Image className={header.img} src="/Logo.png" alt="Ir ao menu" width={500} height={500} />
            <div className={header.title}>Rodents R Us</div>
        </a>
    );
}
