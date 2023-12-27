import Image from "next/image"

import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"

export default function Algihand() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Algihand" desc="Continente (Pop. 3500)" />
                <ItemWiki titulo="Largura." desc="21km" />
                <ItemWiki titulo="Altura." desc="22,5km" />
                <ItemWiki titulo="Área." desc="10.752km" />
                <ItemWiki titulo="Idiomas." desc="Algihani, Inglês, Anão, Grunge, Ta'agra, Élfico, Dracônico, Halfling, Aviano, Gnômico, Orc, Infernal" />
            </div>
            <div className={Wiki.images}>
                <Image className={Wiki.img} src="../Mapa.png" width={1600} height={1200} alt="Um mapa de Algihand" />
                <ItemWiki titulo=">" desc="O mapa de Algihand, atualizado conforme a aventura avança" />
            </div>
        </main >
    )
}