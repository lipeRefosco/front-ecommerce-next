"use client"
import { useRouter, usePathname } from "next/navigation";
import { TbArrowBackUp } from "react-icons/tb"

import styles from './styles.module.css'
import Button from "../Button";

export default function BackButton() {
	const router = useRouter()
	const pathname = usePathname()
	const onHomePage = pathname === '/' || pathname === ''

	return onHomePage
		? ''
		: <div onClick={() => router.back()} className={styles.back_btn}>
			<Button Icon={TbArrowBackUp} style="" />
		</div>
}