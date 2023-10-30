import { Product } from "@/app/types/Product";
import ProductCard from "../ProductCard";


export default function ProductCardWide({
    prod
}: {
    prod: Product
}) {
    return <ProductCard
        style={{flexDirection: 'row'}}
        prod={prod} />
}