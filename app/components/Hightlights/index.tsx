import styles from './styles.module.css'

export default function Highlights() {
    return (
        <section className={styles.highlights}>
            <div className={styles.displays}>
                <span><a href="#highlights-1"><img src="#highlights-1" alt="highlights-1" /></a></span>
                <span><a href="#highlights-2"><img src="#highlights-2" alt="highlights-2" /></a></span>
                <span><a href="#highlights-3"><img src="#highlights-3" alt="highlights-3" /></a></span>
            </div>
            <div className={styles.thumbs}>
                <span> </span>
                <span> </span>
                <span> </span>
            </div>
        </section>
    )
}