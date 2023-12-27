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
            </div>
            <div className={Wiki.images}>
                <Image className={Wiki.img} src="../Mapa.png" width={1600} height={1200} alt="Um mapa de Algihand" />
            </div>
        </main>
    )
}