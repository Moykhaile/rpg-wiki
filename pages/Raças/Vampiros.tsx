import Image from "next/image"

import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"

const desc = "Raça mista."

export default function Avianos() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Vampiros" desc={desc} />
                <ItemWiki titulo="Raça mista." desc="Esta raça deve ser adicionada a um personagem junto de outra raça, normalmente a humana, para funcionar. Por exemplo, um orc vampiro, ou uma elfa vampira." />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Carisma aumenta em 2, e seu valor de Inteligência aumenta em 1, além das habilidades de sua raça mista." />
                <ItemWiki titulo="Idade." desc="Vampiros não amadurecem e envelhecem da mesma forma que outras raças." />
                <ItemWiki titulo="Alinhamento." desc="Vampiros podem não ter uma tendência inata para o mal, mas muitos deles acabam indo para esse caminho. Bom ou não, suas hierarquias rigorosas os inclinam para um alinhamento leal." />
                <ItemWiki titulo="Tamanho." desc="Seu tamanho depende de sua raça mista." />
                <ItemWiki titulo="Deslocamento." desc="Sua velocidade de caminhada depende de sua raça mista." />
                <ItemWiki titulo="Idiomas." desc="Você pode falar, ler e escrever Vampírico, além dos idiomas de sua raça mista." />
                <br />
                <ItemWiki titulo="Visão no Escuro." desc="Graças à sua herança, você tem uma visão superior em condições de escuridão e penumbra. Você pode ver em luz fraca dentro de 16 metros de você como se fosse luz normal, e em escuridão como se fosse penumbra. Você não pode discernir cores na escuridão, apenas tons de cinza." />
                <ItemWiki titulo="Resistência Vampírica." desc="Você possui resistência a dano necrótico." />
                <ItemWiki titulo="Sede de Sangue." desc="Você pode drenar sangue e energia vital de uma criatura disposta ou que esteja agarrada, incapacitada ou restrita por você. Faça um ataque corpo a corpo contra o alvo. Se atingir, você causa 1 de dano perfurante e 1d6 de dano necrótico. O valor máximo de pontos de vida do alvo é reduzido por uma quantidade igual ao dano necrótico sofrido, e você recupera pontos de vida igual a essa quantidade. A redução dura até que o alvo termine um descanso longo. O alvo morre se esse efeito reduzir seu valor máximo de pontos de vida para 0." />
                <ItemWiki titulo="Banquete de Sangue." desc="Quando você drena sangue com sua habilidade Sede de Sangue, você experimenta uma explosão de vitalidade. Sua velocidade aumenta em 10 pés, e você tem vantagem em testes de Força e Destreza e em resistências por 1 minuto." />
                <ItemWiki titulo="Medo do sol." desc="Você não pode se expor ao sol nem a luzes fortes, pois sua pele não consegue suportá-los." />
                <ItemWiki titulo="Imortal." desc="Vampiros não levam dano da mesma forma que outras raças, e mesmo podendo ser feridos e incapacitados, só podem ser mortos tendo seus corações perfurados por madeira." />
                <ItemWiki titulo="Fraquezas Vampíricas." desc="Um vampiro não pode entrar em contato com alho, o sol, não possuem reflexo e uma fraqueza por armas e objetos de metal." />
            </div>
            <div className={Wiki.images}>
                <Image className={`${Wiki.img} ${Wiki.zoomable}`} src="../Raças/Vampiro.png" width={1600} height={1200} alt="Presas de um vampiro" />
            </div>
        </main>
    )
}