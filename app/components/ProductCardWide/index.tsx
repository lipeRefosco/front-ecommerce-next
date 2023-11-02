import { Product } from "@/app/types/Product";
import ProductCard from "../ProductCard";
import { CSSProperties } from "react";


export default function ProductCardWide({
    prod
}: {
    prod: Product
}) {

    const custonStyle: CSSProperties = {
        flexDirection: 'row',
        flexGrow: 1
    }

    return <ProductCard
        style={custonStyle}
        prod={prod} />
}