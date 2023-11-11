import Link from "next/link"
import styles from "./styles.module.css"
import { AiOutlineArrowRight } from "react-icons/ai"

type Section = {
	children: React.ReactNode,
	title?: string
}

export default function Section(
	{
		children,
		title
	}: Section
) {
	return (
		<section className={styles.section}>
			{title
			? <h2>{title} - <Link href={'./category'}>See all <AiOutlineArrowRight /></Link></h2>
			: ''}
			{children}
		</section>
	)
}