import Link from 'next/link';

import errorpage from '@/styles/errorpage.module.css';

export default function Error404() {
    return (
        <div className={errorpage.error}>
            <br />
            <h1 className={errorpage.title}>Erro 404!</h1>
            <p className={errorpage.desc}>A página que você está tentando acessar não foi encontrada. Se você está tentando acessar uma página que deveria existir e não está encontrando, mande uma mensagem para Moykhaile.</p>

            <Link className={errorpage.link} href='/'>Clique aqui para voltar para a página inicial</Link>
        </div>
    );
}