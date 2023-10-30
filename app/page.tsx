import Section from './components/Section'
import Carousel from './components/Carousel'
import Wrapper from './components/Section/Wrapper'
import ProductCard from './components/ProductCard'
import ProductCardWide from './components/ProductCardWide'

import { products } from './fakedatas/products'
import { carouselData } from './fakedatas/carousel'


export default function Home() {
  return (
    <>
      <Carousel items={carouselData} />
      <Section title="T-Shirts">
        <Wrapper>
          <ProductCard prod={products[1]} />
          <ProductCard prod={products[1]} />
          <ProductCard prod={products[1]} />
          <ProductCard prod={products[1]} />
          <ProductCardWide prod={products[1]} />
        </Wrapper>
      </Section>
    </>
  )
}
