import ItemWikiCSS from '@/styles/itemwiki.module.css'

export default function ItemWiki({ titulo, desc }: any) {
    return (
        <div className={ItemWikiCSS.wrap}>
            <p className={ItemWikiCSS.text}>
                <b className={ItemWikiCSS.titulo}>
                    {titulo}
                </b>
                {desc}
            </p>
        </div>
    )
}