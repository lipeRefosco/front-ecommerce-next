import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import Wrapper from "../components/Section/Wrapper";

import { products } from "../fakedatas/products";

export default function Category() {
    return (
        <>
        <Section title="Category">
            <Wrapper>
                <ProductCard prod={products[0]}></ProductCard>
                <ProductCard prod={products[0]}></ProductCard>
                <ProductCard prod={products[0]}></ProductCard>
                <ProductCard prod={products[0]}></ProductCard>
                <ProductCard prod={products[0]}></ProductCard>
                <ProductCard prod={products[0]}></ProductCard>
                <ProductCard prod={products[0]}></ProductCard>
            </Wrapper>
        </Section>
        </>
    );
}