import home from '@/styles/home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={home.main}>
      <Link href='/Calendario_De_Algihand' className={home.calendario}>Calendário de Algihand</Link>
      <div className={home.wrap}>
        <div className={home.list}>
          <h1>Raças</h1>
          <ul>
            <li><Link href="/Raças/Avianos">Avianos</Link></li>
            <li><Link href="/Raças/Grunges">Grunges</Link></li>
            <li><Link href='/Raças/Khajiits'>Khajiits</Link></li>
            <li><Link href='/Raças/Khenras'>Khenras</Link></li>
            <li><Link href="/Raças/Reptilianos">Reptilianos</Link></li>
            <li><Link href="/Raças/Vampiros">Vampiros</Link></li>
            <li><Link href="http://dnd5ed.github.io/" rel="noopener noreferrer" target="_blank">Outras (ver LDJ)</Link></li>
          </ul>
        </div>
        <div className={home.list}>
          <h1>História do Mundo</h1>
          <ul>
            <li><Link href="/Guerra_dos_5_Reinos">Guerra dos 5 Reinos</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}