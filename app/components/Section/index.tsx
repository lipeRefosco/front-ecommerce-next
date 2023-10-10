import styles from "./styles.module.css"

type Section = {
	children: React.ReactNode,
	title: string
}

export default function Section(
	{
		children,
		title
	}: Section
) {
	return (
		<section className={styles.products}>
			<h2>{title} - See all</h2>
			{children}
		</section>
	)
}