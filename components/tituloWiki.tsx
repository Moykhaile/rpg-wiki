import TituloWikiCSS from '@/styles/titulowiki.module.css'

export default function TituloWiki({ titulo, desc }: any) {
    return (
        <div className={TituloWikiCSS.wrap}>
            <h1 className={TituloWikiCSS.titulo}>
                {titulo}
            </h1>
            {
                desc && desc != "" ?
                    <p className={TituloWikiCSS.desc} dangerouslySetInnerHTML={createMarkup(desc)}>

                    </p> : null
            }
        </div>
    )
}

function createMarkup(desc: any) {
    return { __html: desc };
}