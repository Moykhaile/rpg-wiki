import TituloWiki from "@/components/tituloWiki"
import ItemWiki from "@/components/itemWiki"

import Wiki from "@/styles/wiki.module.css"

export default function Calendario_De_Algihand() {
    return (
        <main className={Wiki.main}>
            <div className={Wiki.desc}>
                <TituloWiki titulo="Calendário de Algihand" />
                <h2 className={Wiki.primeiroh2}>Dias da Semana</h2>
                <ItemWiki titulo="1)" desc="Mmainen-peva" />
                <ItemWiki titulo="2)" desc="Tonen-peva" />
                <ItemWiki titulo="3)" desc="Kolmas-peva" />
                <ItemWiki titulo="4)" desc="Neljaslomma" />
                <h2>Meses do Ano</h2>
                <ItemWiki titulo="1)" desc="Esinnakim (18 dias)" />
                <ItemWiki titulo="2)" desc="Esinnakim (16 dias)" />
                <ItemWiki titulo="3)" desc="Esinnakim (18 dias)" />
                <ItemWiki titulo="4)" desc="Esinnakim (16 dias)" />
                <ItemWiki titulo="5)" desc="Esinnakim (20 dias)" />
                <h3>Este calendário possui 88 dias no ano.</h3>
                <h2>Criação</h2>
                <ItemWiki titulo="" desc="O calendário foi inventado junto da criação do Antigo Parlamento de Algihand, cerca de 300 anos depois da chegada do povo colonizador das terras não povoadas do continente. Foi baseado nas fases lunares e seu inventor foi um Khajiit chamado Garod Algisaeem." />
            </div>
        </main>
    )
}