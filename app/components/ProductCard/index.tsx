import styles from './styles.module.css'
import { TbShoppingBagPlus, TbShoppingBagMinus } from 'react-icons/tb'

type Product = {
  name: string,
  previusPrice: number,
  newPrice: number,
  image: string,

}

export default function ProductCard({
  name,
  previusPrice,
  newPrice,
  image
}: Product ) {
  return (
    <div className={styles.productCard}>
      <div className={styles.img}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.informations}>
        <h3>{name}</h3>
        <div>
          <span>R$ {previusPrice}</span>
          <span>R$ {newPrice}</span>
        </div>
      </div>
      <div>
        <button><TbShoppingBagPlus /></button>
      </div>
    </div>
  )
}