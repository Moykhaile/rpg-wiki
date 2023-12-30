import Image from "next/image"

import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"
import Link from "next/link"

export default function Matnnahoma() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Matnnahoma" desc="Reino" />
                <ItemWiki titulo="População." desc="1370 pessoas." />
                <ItemWiki titulo="Cidades." desc="5 cidades (2 portos e uma ilha), Hain'ky, Jarven, Osteri, Saarem'Ta e Valissa." />
            </div>
            <div className={Wiki.images}>
                <Link href="../Matnnahoma/Matnnahoma.png">
                    <Image className={Wiki.img} src="../Matnnahoma/Matnnahoma.png" width={4095} height={4095} alt="Um mapa de Matnnahoma" />
                    <ItemWiki titulo=">" desc="O mapa da metrópole de Matnnahoma." /> </Link> <br />
                <Link href="../Matnnahoma/Hain'Ky.png">
                    <Image className={Wiki.img} src="../Matnnahoma/Hain'Ky.png" width={4095} height={4095} alt="Um mapa de Hain'ky" />
                    <ItemWiki titulo=">" desc="O mapa do porto de Hain'Ky." /> </Link> <br />
                <Link href="../Matnnahoma/Jarven.png">
                    <Image className={Wiki.img} src="../Matnnahoma/Jarven.png" width={4095} height={4095} alt="Um mapa de Jarven" />
                    <ItemWiki titulo=">" desc="O mapa da cidade de Jarven." /> </Link> <br />
                <Link href="../Matnnahoma/Osteri.png">
                    <Image className={Wiki.img} src="../Matnnahoma/Osteri.png" width={4095} height={4095} alt="Um mapa de Osteri" />
                    <ItemWiki titulo=">" desc="O mapa do porto de Osteri." /> </Link > <br />
                <Link href="../Matnnahoma/Saarem'Ta.png">
                    <Image className={Wiki.img} src="../Matnnahoma/Saarem'Ta.png" width={4095} height={4095} alt="Um mapa de Saarem'Ta" />
                    <ItemWiki titulo=">" desc="O mapa da cidade da ilha de Saarem'Ta." /> </Link> <br />
                <Link href="../Matnnahoma/Valissa.png">
                    <Image className={Wiki.img} src="../Matnnahoma/Valissa.png" width={4095} height={4095} alt="Um mapa de Valissa" />
                    <ItemWiki titulo=">" desc="O mapa da cidade de Valissa." /> </Link>
            </div>
        </main>
    )
}