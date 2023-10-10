import Highlights from './components/Hightlights'
import Section from './components/Section'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Highlights />
      <Section title="T-Shirts">
        <div className={styles.productCardSmall}>
          <div>
            <img src="#product1" alt="product1" />
          </div>
          <div>
            <h3>T-Shirt Black</h3>
            <div>
              <span>R$ 100,00</span>
              <span>R$ 90,00</span>
            </div>
          </div>
          <div>
            <button><img src="#add-to-bag" alt="add-to-bag" /></button>
          </div>
        </div>
        <div className={styles.productCardSmall}>
          <div>
            <img src="#product1" alt="product1" />
          </div>
          <div>
            <h3>T-Shirt Black</h3>
            <div>
              <span>R$ 100,00</span>
              <span>R$ 90,00</span>
            </div>
          </div>
          <div>
            <button><img src="#add-to-bag" alt="add-to-bag" /></button>
          </div>
        </div>
        <div className={styles.productCardWidely}>
          <div>
            <img src="#product1" alt="product1" />
          </div>
          <div>
            <h3>T-Shirt Black</h3>
            <div>
              <span>R$ 100,00</span>
              <span>R$ 90,00</span>
            </div>
          </div>
          <div>
            <button><img src="#add-to-bag" alt="add-to-bag" /></button>
          </div>
        </div>
      </Section>
    </main>
  )
}
