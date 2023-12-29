import Image from "next/image"

import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"

export default function Matnnahoma() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Matnnahoma" desc="Reino" />
                <ItemWiki titulo="População." desc="1370 pessoas." />
                <ItemWiki titulo="Cidades." desc="5 cidades (2 portos e uma ilha), Hain'ky, Jarven, Osteri, Saarem'Ta e Valissa." />
            </div>
            <div className={Wiki.images}>
                <Image className={Wiki.img} src="../Matnnahoma/Matnnahoma.png" width={1600} height={1200} alt="Um mapa de Algihand" />
                <ItemWiki titulo=">" desc="O mapa da metrópole de Matnnahoma." />
                <Image className={Wiki.img} src="../Matnnahoma/Hain'Ky.png" width={1600} height={1200} alt="Um mapa de Algihand" />
                <ItemWiki titulo=">" desc="O mapa do porto de Hain'Ky." />
                <Image className={Wiki.img} src="../Matnnahoma/Jarven.png" width={1600} height={1200} alt="Um mapa de Algihand" />
                <ItemWiki titulo=">" desc="O mapa da cidade de Jarven." />
                <Image className={Wiki.img} src="../Matnnahoma/Osteri.png" width={1600} height={1200} alt="Um mapa de Algihand" />
                <ItemWiki titulo=">" desc="O mapa do porto de Osteri." />
                <Image className={Wiki.img} src="../Matnnahoma/Saarem'Ta.png" width={1600} height={1200} alt="Um mapa de Algihand" />
                <ItemWiki titulo=">" desc="O mapa da cidade da ilha de Saarem'Ta." />
                <Image className={Wiki.img} src="../Matnnahoma/Valissa.png" width={1600} height={1200} alt="Um mapa de Algihand" />
                <ItemWiki titulo=">" desc="O mapa da cidade de Valissa." />
            </div>
        </main>
    )
}