import styles from './styles.module.css'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { Product } from '../../types/Product'
import { CSSProperties } from 'react'
import Button from '../Button'
import { AiOutlineHeart } from 'react-icons/ai'

export default function ProductCard({
  prod,
  style,
}: {
  prod: Product,
  style?: CSSProperties
}) {
  return (
    <div className={styles.productCard} style={style}>
      <div className={styles.img}>
        <span className={styles.fav_button}><Button Icon={AiOutlineHeart} style='' /></span>
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