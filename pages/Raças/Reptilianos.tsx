import Image from "next/image"

import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"

const desc = "Os reptilianos, como o nome indica, possuem características de répteis e, assim, pele escamosa, uma cauda e olhos diferentes do humano. Em sua forma humana possuem pele áspera em algumas áreas como costelas, costas, cauda e interior dos braços, além da região íntima (com exceção de seus órgãos genitais). Não possuem umbigos, seus mamilos podem aparecer e desaparecer de seus corpos, e têm sangue frio porém sentem muito calor no dia-a-dia e preferem poucas roupas.</p><p>Ao se transformarem em sua forma animalesca, suas presas e unhas crescem e formam pontas afiadas, escamas aparecem pelos seus corpos e suas visões melhoram significativamente."

export default function Avianos() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Reptiliano" desc={desc} />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Destreza aumenta em 2." />
                <ItemWiki titulo="Idade." desc="Os reptilianos atingem a maturidade aos 8 anos e vivem de 90 a 120 anos." />
                <ItemWiki titulo="Alinhamento." desc="Os reptilianos variam em alinhamento, mas muitos tendem para Neutro." />
                <ItemWiki titulo="Tamanho." desc="Os reptilianos rondam a marca de 1,80 metros e pesam de 60 a 200kg. Seu tamanho é Médio." />
                <ItemWiki titulo="Deslocamento." desc="Sua velocidade de caminhada base é de 8 metros." />
                <ItemWiki titulo="Idiomas." desc="Você pode falar, ler e escrever Comum e Dracônico." />
                <br />
                <ItemWiki titulo="Pele Espessa." desc="Sua CA não pode ser inferior a 12, independentemente da armadura que estiver vestindo, a menos que por meios mágicos." />
                <ItemWiki titulo="Fisiologia Híbrida." desc="Suas características combinadas lhe dão um talento para sair de situações atléticas difíceis. Sempre que falhar em um teste de resistência de Força, Destreza ou Constituição, você pode usar sua reação para rolar um d4 e somá-lo ao resultado, potencialmente transformando a falha em um sucesso. Você pode ativar esse recurso um número de vezes igual ao seu bônus de proficiência, recuperando os usos gastos após completar um descanso longo." />
                <ItemWiki titulo="Ataque Frenético." desc="Como uma ação bônus em seu turno, você pode invocar uma fúria primal enterrada profundamente em seu sangue. Você pode se mover até a sua velocidade e fazer um ataque com arma ou feitiço contra uma criatura. Em um acerto, você rola 1 dado de dano extra ao calcular o dano (se o ataque causar múltiplos tipos de dano, você pode escolher a qual dado adicionar a rolagem extra). Uma vez que você ativar esse recurso, não pode usá-lo novamente até completar um descanso curto ou longo." />
                <h2>Sangue de Dragão</h2>
                <ItemWiki titulo="" desc="Reptilianos com sangue dominante de dragão herdam algumas das características de seus pais." />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu Carisma aumenta em 1." />
                <ItemWiki titulo="Resistência Limitada a Dano." desc="Escolha 1 tipo de dano no início do jogo: Ácido, Frio, Fogo, Raio ou Veneno. Sempre que você sofrer 10 ou mais de dano desse tipo, você pode rolar um d8 e subtrair esse valor do total do dano." />
                <h2>Sangue de Kobold</h2>
                <ItemWiki titulo="" desc="Reptilianos com sangue dominante de kobold herdam algumas das características de seus pais." />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Sua Destreza aumenta em 1. Como de costume, você não pode aumentar um valor de habilidade acima de 20 com este recurso." />
                <ItemWiki titulo="Visão no Escuro." desc="Você pode ver em luz fraca em um raio de 60 pés como se fosse luz normal, e em escuridão como se fosse luz fraca. Você não consegue discernir cores na escuridão, apenas tons de cinza." />
                <ItemWiki titulo="Influência dos Kobolds." desc="Você é proficiente com uma ferramenta de sua escolha: Ferramentas de Pedreiro, Ferramentas de Ladrão ou Ferramentas de Mecânico." />
                <h2>Sangue de Lagarto</h2>
                <ItemWiki titulo="" desc="Reptilianos com sangue dominante de lagarto herdam algumas das características de seus pais." />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Sua Força aumenta em 1." />
                <ItemWiki titulo="Mordida." desc="Você tem uma mandíbula forte, que pode ser usada para realizar ataques desarmados. Em um acerto, causa 1d4 + modificador de Força de dano perfurante. Você possui proficiência com sua mordida." />
                <ItemWiki titulo="Influência dos Homens-Lagarto." desc="Você é proficiente em uma habilidade de sua escolha: Percepção, Furtividade ou Sobrevivência." />
            </div>
            <div className={Wiki.images}>
                <Image className={`${Wiki.img} ${Wiki.zoomable}`} src="../Raças/Reptiliano.png" width={1600} height={1200} alt="Uma reptiliano" />
            </div>
        </main>
    )
}

/*
PASTEFROMOBSIDIAN
*/