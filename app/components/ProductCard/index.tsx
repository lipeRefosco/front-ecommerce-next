import styles from './styles.module.css'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { IProduct } from '../../types/IProduct'
import { CSSProperties } from 'react'
import Button from '../Button'

export default function ProductCard({
  prod,
  style,
}: {
  prod: IProduct,
  style?: CSSProperties
}) {
  return (
    <div className={styles.productCard} style={style}>
      <div className={styles.img}>
        <img src={prod.image} alt={prod.name} />
      </div>
      <div className={styles.informations}>
        <h3>{prod.name}</h3>
        <div>
          <span>R$ {prod.previusPrice}</span>
          <span>R$ {prod.newPrice}</span>
        </div>
        <div>
          <Button Icon={TbShoppingBagPlus} style='filled' />
        </div>
      </div>
    </div>
  )
}