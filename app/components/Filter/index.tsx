import { AiOutlineClose } from 'react-icons/ai'
import Button from '../Button'
import styles from './styles.module.css'

export default function Filter({
    itemsFiltered
}: {
    itemsFiltered: Array<any>
}) {
    return (
        <div className={styles.filter}>
            {itemsFiltered.map((i) => (
                <span key={i} className={styles.item}>
                    <Button Icon={AiOutlineClose} style='' text={`Filter Name ${i}`} />
                </span>
            ))}
        </div>
    )
}