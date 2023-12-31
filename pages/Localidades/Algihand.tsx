import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"

export default function Algihand() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Algihand" desc="Continente (Pop. 3560)" />
                <ItemWiki titulo="Largura." desc="21km" />
                <ItemWiki titulo="Altura." desc="22,5km" />
                <ItemWiki titulo="Área." desc="10.752km" />
                <ItemWiki titulo="Idiomas." desc="Por todo o território de Algihand são falados os seguintes idiomas: Algihani (o idioma mais comum), Inglês, Anão, Grunge, Ta'agra, Élfico, Dracônico, Halfling, Aviano, Gnômico, Orc e Infernal. Em Algihand também existem alguns alfabetos comuns, como Algihani (comum), Sylvan, Anão e Élfico." />
            </div>
        </main >
    )
}