import TituloWikiCSS from '@/styles/titulowiki.module.css'

export default function TituloWiki({ titulo, desc }: any) {
    return (
        <div className={TituloWikiCSS.wrap}>
            <h1 className={TituloWikiCSS.titulo}>
                {titulo}
            </h1>
            <p className={TituloWikiCSS.desc}>
                {desc}
            </p>
        </div>
    )
}