import Highlights from './components/Hightlights'
import ProductCard from './components/ProductCard'
import Section from './components/Section'
import Wrapper from './components/Section/Wrapper'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Highlights />
      <Section title="T-Shirts">
        <Wrapper>
          <ProductCard
          name="Teste"
          previusPrice={100}
          newPrice={90}
          image="#product-1" />
          <ProductCard
          name="Teste"
          previusPrice={100}
          newPrice={90}
          image="#product-2" />
          <ProductCard
          name="Teste"
          previusPrice={100}
          newPrice={90}
          image="#product-3" />
        </Wrapper>
      </Section>
    </main>
  )
}
