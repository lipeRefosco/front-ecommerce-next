"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbArrowBackUp } from "react-icons/tb"

import styles from './styles.module.css'
import Button from "../Button";

export default function BackButton() {

	const pathname = usePathname()
	const onHomePage = pathname === '/' || pathname === ''

	return onHomePage
		? ''
		: <Link href={'../'} className={styles.back_btn}>
			<Button Icon={TbArrowBackUp} style="" />
		</Link>
}