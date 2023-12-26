import Image from "next/image"

import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"

const desc = "Grunges são criaturas racionais anfíbias que têm descendência direta dos sapos, podendo inclusive se comunicar com outros anfíbios e até mesmo alguns répteis. São a única raça que não consegue se transformar em humano, e as que sofrem maior preconceito no continente. Algumas espécies de grunge são venenosas, e podem liberar um suco peçonhento pelos poros de suas peles. Possuem vantagem na água e desvantagem em ambientes secos, precisam sempre se hidratar."

export default function Avianos() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Grunges" desc={desc} />
                <ItemWiki titulo="Aumento no Valor de Habilidade." desc="Seu valor de Destreza aumenta em 2 e seu valor de Constituição aumenta em 1." />
                <ItemWiki titulo="Idade." desc="Grunges amadurecem para a vida adulta em um único ano, mas são conhecidos por viverem até 50 anos." />
                <ItemWiki titulo="Alinhamento." desc="A maioria dos grunges é leal, tendo sido criada em um rígido sistema de castas. Eles têm uma inclinação para o mal também, proveniente de uma cultura onde o avanço social ocorre raramente, e na maioria das vezes porque outro membro de seu exército morreu e não há mais ninguém daquela casta para preencher a vaga." />
                <ItemWiki titulo="Tamanho." desc="Grunges têm entre 75 centímetros e 1 metro de altura e pesam em média cerca de 13kg. Seu tamanho é Pequeno." />
                <ItemWiki titulo="Deslocamento." desc="Você tem uma velocidade de caminhada 8 metros. Suas almofadas adesivas nos dedos das mãos e dos pés lhe conferem uma velocidade de escalada de 8 metros." />
                <ItemWiki titulo="Idiomas." desc="Você pode falar, ler e escrever Grunge." />
                <br />
                <ItemWiki titulo="Sub-raça." desc="Grunges podem vir em várias cores: amarelo, verde, azul, vermelho e roxo." />
                <ItemWiki titulo="Vigilância Arborícola." desc="Você possui proficiência na habilidade de Percepção." />
                <ItemWiki titulo="Anfíbio." desc="Você pode respirar ar e água." />
                <ItemWiki titulo="Salto Firme." desc="Seu salto longo alcança até 8 metros e seu salto alto alcança até 4,5 metros, com ou sem uma corrida inicial." />
                <ItemWiki titulo="Dependência de Água." desc="Se você deixar de se imergir em água por pelo menos 1 hora durante um dia, sofrerá um nível de exaustão no final desse dia. Você só pode se recuperar dessa exaustão através de magia ou se imergindo em água por pelo menos 1 hora." />
                <h2>Grunges Vermelhos e Roxos</h2>
                <ItemWiki titulo="Pele Venenosa." desc="Qualquer criatura que o agarre ou entre em contato direto com sua pele deve ser bem-sucedida em um teste de resistência de Constituição CD 12 ou ficará envenenada por 1 minuto. Uma criatura envenenada que não está mais em contato direto com você pode repetir o teste de resistência no final de cada um de seus turnos, encerrando o efeito consigo mesmo em caso de sucesso.
Você também pode aplicar esse veneno a qualquer arma perfurante como parte de um ataque com essa arma, embora quando atingir, o veneno reaja de maneira diferente. O alvo deve ser bem-sucedido em um teste de resistência de Constituição CD 12 ou sofrer 2d4 de dano por veneno." />
            </div>
            <div className={Wiki.images}>
                <Image className={Wiki.img} src="./Grunge.png" width={1600} height={1200} alt="Uma grunge" />
            </div>
        </main>
    )
}