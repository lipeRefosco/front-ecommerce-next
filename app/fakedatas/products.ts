import { IProduct } from "../types/IProduct";

export const products: IProduct[] = Array.from({length: 5}, (_,i) => {
    return {
        name: `Product name ${i}`,
        previusPrice: 100,
        newPrice: 90,
        image: `#product-img-${i}`
    }
})