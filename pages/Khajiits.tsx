import Image from "next/image"

import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"

const desc = "AAAAAAAAAA"

export default function Avianos() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Khajiit" desc={desc} />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Devido às suas diversas formas, o aumento no valor de habilidade é inteiramente dependente da sub-raça." />
                <ItemWiki titulo="Idade." desc="Acredita-se que a vida dos Khajiit seja semelhante à dos humanos normais, enquanto outros acreditam que seja mais parecida com outros tipos de felinos. Eles atingem a idade adulta aos 16 anos e geralmente vivem entre 80 e 150 anos." />
                <ItemWiki titulo="Alinhamento." desc="A raça Khajiit tende a preferir alinhamentos caóticos devido à sua natureza livre e espirituosa." />
                <ItemWiki titulo="Tamanho." desc="Devido às suas diversas formas, o tamanho da raça Khajiit é inteiramente dependente da sub-raça." />
                <ItemWiki titulo="Deslocamento." desc="Sua velocidade de caminhada base é de 10 metros." />
                <ItemWiki titulo="Idiomas." desc="Você pode falar, ler e escrever Comum e Ta'agra. Ta'agra é a língua nativa dos Khajiit e pode ser usada para falar com gatos e outros felinos. Usam o alfabeto Sylvan." />
                <ItemWiki titulo="Garras." desc="Você tem um conjunto de garras retráteis. Seus ataques desarmados causam 1d4 de dano cortante. Você pode usar Destreza em vez de Força para os ataques e rolagens de dano de seus ataques de garra." />
                <ItemWiki titulo="Visão no Escuro." desc="Graças à sua herança felina. Você pode ver em luz fraca em um raio de 60 pés, como se fosse luz brilhante, e em escuridão como se fosse luz fraca. Você não consegue discernir cores na escuridão, apenas tons de cinza." />
                <ItemWiki titulo="Lua Escondida." desc="Você tem uma cauda preênsil e pode usá-la para ataques desarmados." />
                <ItemWiki titulo="Território Doméstico." desc="Como sua terra natal consiste em um deserto e selva, você não sofre efeitos negativos ao estar nesses ambientes e tem proficiência na habilidade de Sobrevivência enquanto estiver nesses terrenos." />
                <ItemWiki titulo="Furtividade Natural." desc="Você ganha proficiência na habilidade de Furtividade." />
                <ItemWiki titulo="Queda Suave." desc="Você tem resistência contra danos de queda e sempre cai de pé." />
                <ItemWiki titulo="Dança das Duas Luas." desc="Quando você faz um ataque de garra usando sua ação, você pode atacar novamente com a garra da outra mão como parte do mesmo ataque. Você deve fazer rolagens de ataque e dano separadas." />
                <h2>Suthay-raht e Suthay</h2>
                <ItemWiki titulo="" desc="Suthay-raht são semelhantes em altura e construção à raça humana. Suthay-raht são uma das raças mais comuns de Khajiit. Sua coloração varia de cinza escuro e marrom a branco, com ou sem listras e manchas. Suthay são semelhantes aos Suthay-raht em todos os aspectos, exceto que são de estatura menor." />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Destreza aumenta em 2, e seu valor de Força aumenta em 1." />
                <ItemWiki titulo="Tamanho." desc="A altura dos Suthay está entre 1,5 metros à 2 metros, e seu peso varia entre 45 e 77kg. Seu tamanho é Médio." />
                <h2>Cathay e Cathay-raht</h2>
                <ItemWiki titulo="" desc="Semelhante ao Suthay-raht em aparência e bipedalismo, eles possuem maior estatura e força. Maiores e mais fortes que os Cathay, os Cathay-raht são frequentemente descritos por raças não Khajiit como homens-jaguar." />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Força aumenta em 2, e seu valor de Constituição aumenta em 1." />
                <ItemWiki titulo="Tamanho." desc="A altura dos Cathay está entre 1,5 e 2,1 metros, e seu peso varia entre 55 e 86kg. Seu tamanho é Médio." />
                <h2>Ohmes e Ohmes-raht</h2>
                <ItemWiki titulo="" desc="Ohmes são semelhantes aos humanos e elfos em muitos aspectos. Para evitar serem confundidos com eles, muitos Ohmes tatuam seus rostos para se assemelhar a um aspecto felino. Ohmes-raht é semelhante ao Ohmes normal, exceto por suas caudas e pelos curtos e claros." />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Destreza aumenta em 2, e seu valor de Carisma aumenta em 1." />
                <ItemWiki titulo="Tamanho." desc="A altura dos Ohmes está entre 1,3 e 1,8 metros, e seu peso varia entre 40 e 56kg. Seu tamanho é Médio." />
                <h2>Tojay e Tojay-raht</h2>
                <ItemWiki titulo="" desc="O Tojay-raht é uma versão maior do Tojay." />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Carisma aumenta em 2, e seu valor de Destreza aumenta em 1." />
                <ItemWiki titulo="Tamanho." desc="A altura dos Tojay está entre 1,37 e 1,8 metros, e seu peso varia entre 45 e 60kg. Seu tamanho é Médio." />
            </div>
            <div className={Wiki.images}>
                <Image className={Wiki.img} src="./Khajiit.png" width={1600} height={1200} alt="Uma khajiit" />
            </div>
        </main>
    )
}

/*
PASTEFROMOBSIDIAN
*/