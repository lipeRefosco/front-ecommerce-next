import { IProduct } from "@/app/types/IProduct";
import ProductCard from "../ProductCard";


export default function ProductCardWide({
    prod
}: {
    prod: IProduct
}) {
    return <ProductCard
        style={{flexDirection: 'row'}}
        prod={prod} />
}