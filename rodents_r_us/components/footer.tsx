import footer from '@/styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={footer.footer}>
            <div className={footer.semper}>
                “Sic semper evello mortem tyrannis.”
            </div>
            <div className={footer.author}><span className={footer.symbol}>⌘</span> By Moykhaile</div>
        </footer >
    )
}