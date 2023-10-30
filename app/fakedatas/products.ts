import { Product } from "../types/Product";
import tshirtModel from "../assets/tshirt.png"


export const products: Product[] = Array.from({length: 5}, (_,i) => {
    return {
        name: `Product name ${i}`,
        previusPrice: 100,
        newPrice: 89.99,
        image: tshirtModel.src
    }
})