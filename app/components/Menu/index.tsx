import styles from './styles.module.css'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineHeart } from 'react-icons/ai'
import { TbCategory2 } from 'react-icons/tb'
import { BsHandbag } from 'react-icons/bs'


export default function Menu() {
	return (
		<nav className={styles.menu}>
			<a href="#account"><CgProfile /></a>
			<a href="#favorites"><AiOutlineHeart /></a>
			<a href="#categories"><TbCategory2 /></a>
			<a href="#checkout"><BsHandbag /></a>
		</nav>
	)
}