import Highlights from './components/Hightlights'
import ProductCard from './components/ProductCard'
import ProductCardWide from './components/ProductCardWide'
import Section from './components/Section'
import Wrapper from './components/Section/Wrapper'
import styles from './page.module.css'
import { IProduct } from './types/IProduct'

const product: IProduct = {
  name: "Teste",
  previusPrice: 100,
  newPrice: 90,
  image: "#"
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Highlights />
      <Section title="T-Shirts">
        <Wrapper>
          <ProductCard prod={product} />
          <ProductCard prod={product} />
          <ProductCard prod={product} />
          <ProductCard prod={product} />
          <ProductCardWide prod={product} />
        </Wrapper>
      </Section>
    </main>
  )
}
