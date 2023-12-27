import Image from "next/image"

import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"

export default function Algivko() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Algivko" desc="Cidade - Refúgio" />
                <ItemWiki titulo="População." desc="250 pessoas." />
            </div>
            <div className={Wiki.images}>
                <Image className={Wiki.img} src="../Mapa.png" width={1600} height={1200} alt="Um mapa de Algihand" />
            </div>
        </main>
    )
}