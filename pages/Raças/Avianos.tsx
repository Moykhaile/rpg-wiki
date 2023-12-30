import Image from "next/image"

import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"

const desc = "Os avianos são pessoas que possuem características de pássaros, tendo, assim, muita diversidade em suas características e habilidades.</p><p>Todos os avianos possuem asas, que variam de acordo com o pássaro que herdam, e podem se transformar, criando um bico no seus rostos e penas pelos corpos e cabelos.</p><p>Os principais pássaros herdados são: beija-flores, papagaios, canários, sabiás e bem-te-vis.</p><p>Os avianos não conseguem explicar a história de suas origens, mas alguns textos em sua língua nativa dizem ser \"uma incrível exceção da natureza\"."

export default function Avianos() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Avianos" desc={desc} />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Destreza aumenta em 2." />
                <ItemWiki titulo="Idade." desc="Assim como os humanos, avianos chegam a idade adulta no final da adolescência e podem viver teoricamente até cerca de 80 anos. É claro, a maioria encontram uma morte gloriosa (ou sem glória) bem antes desse ponto." />
                <ItemWiki titulo="Alinhamento." desc="A maioria dos avianos tem inclinação para alguma forma de neutralidade. Avianos Íbis, focam mais no conhecimento do que em qualquer outra virtude, e são usualmente neutros. Avianos Falcão são inclinados a serem Leais e Neutros." />
                <ItemWiki titulo="Tamanho." desc="Avianos variam entre 1,50 e 1,80 metros, mas seus corpos são mais esquios e seus ossos parcialmente ocos facilitam seu voo. Seu tamanho é médio." />
                <ItemWiki titulo="Deslocamento." desc="Seu deslocamento básico de caminhada é de 7,5 m. Você tem um deslocamento de voo de 9 m. Você não pode usar seu deslocamento de voo enquanto usar armadura média ou pesada (se sua campanha usa a regra opcional de sobrecarregado, você não pode voar se você está sobrecarregado)." />
                <ItemWiki titulo="Idiomas." desc="Você pode falar, ler e escrever Comum e Aviano." />
                <h2>Íbis</h2>
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Inteligência aumenta em 1." />
                <ItemWiki titulo="Benção de Kefnet." desc="Você pode adicionar metade do seu bônus de proficiência, arredondado para baixo, em qualquer teste de Inteligência que você faça que já não inclua seu bônus de proficiência." />
                <h2>Falcão</h2>
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Sabedoria aumenta em 2." />
                <ItemWiki titulo="Olhos de Falcão." desc="Você tem proficiência na perícia Percepção. Adicionalmente, atacar a longo alcance não impõe desvantagem em suas jogadas de ataque a distancia." />
            </div>
            <div className={Wiki.images}>
                <Image className={Wiki.img && Wiki.zoomable} src="../Raças/Aviana.png" width={1600} height={1200} alt="Uma garota aviana" />
            </div>
        </main>
    )
}