import Image from "next/image"

import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"

const desc = "AAAAAAAAAA"

export default function Avianos() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Khenra" desc={desc} />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Destreza aumenta em 2, e seu valor de Força aumenta em 1." />
                <ItemWiki titulo="Idade." desc="Os khenra amadurecem rapidamente, atingindo a idade adulta em sua adolescência. Os iniciantes khenra geralmente são os mais jovens em uma prole, concluindo os rituais até o final da adolescência. Mesmo sem uma morte violenta, raramente vivem além dos 60 anos." />
                <ItemWiki titulo="Alinhamento." desc="A maioria dos khenra tende para alinhamentos caóticos. Eles não têm uma inclinação particular para o bem ou o mal." />
                <ItemWiki titulo="Tamanho." desc="Os khenra têm construções semelhantes às dos humanos. Seu tamanho é Médio." />
                <ItemWiki titulo="Deslocamento." desc="Sua velocidade de caminhada base é de 10 metros." />
                <ItemWiki titulo="Idiomas." desc="Você pode falar, ler e escrever Comum e mais um outro idioma de sua escolha." />
                <ItemWiki titulo="Treinamento em Armas Khenra." desc="Você possui proficiência com cimitarras, espadas longas, lanças e javelins." />
                <ItemWiki titulo="Gêmeos Khenra." desc="Se seu irmão gêmeo estiver vivo e você puder vê-lo, sempre que você rolar um 1 em um teste de ataque, teste de habilidade ou teste de resistência, você pode rolar o dado novamente e deve usar o novo resultado. Se seu irmão gêmeo estiver morto (ou se você nasceu sem um irmão gêmeo), você não pode ser amedrontado." />
                <ItemWiki titulo="Derrubada de Investida." desc="Imediatamente após você usar a ação Deslocar em seu turno e se mover pelo menos 20 pés, você pode tentar derrubar uma criatura ao chão como parte dessa ação." />
                <ItemWiki titulo="Sentidos Caninos." desc="Você possui proficiência na habilidade de Percepção e vantagem em testes de Sabedoria (Percepção) que dependem do olfato." />
            </div>
            <div className={Wiki.images}>
                <Image className={Wiki.img} src="./Khenra.png" width={1600} height={1200} alt="Um khenra" />
            </div>
        </main>
    )
}

/*
PASTEFROMOBSIDIAN
*/