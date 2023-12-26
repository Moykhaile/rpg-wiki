import Image from "next/image"

import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"

export default function Reino_dos_Anoes() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Algihand" desc="Continente" />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Destreza aumenta em 2." />
                <ItemWiki titulo="Idade." desc="Assim como os humanos, avianos chegam a idade adulta no final da adolescência e podem viver teoricamente até cerca de 80 anos. É claro, a maioria encontram uma morte gloriosa (ou sem glória) bem antes desse ponto." />
                <h2>Falcão</h2>
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Inteligência aumenta em 1." />
                <ItemWiki titulo="Benção de Kefnet." desc="Você pode adicionar metade do seu bônus de proficiência, arredondado para baixo, em qualquer teste de Inteligência que você faça que já não inclua seu bônus de proficiência." />
            </div>
            <div className={Wiki.images}>
                <Image className={Wiki.img} src="./RPG map.png" width={1600} height={1200} alt="Um mapa de Algihand" />
            </div>
        </main>
    )
}