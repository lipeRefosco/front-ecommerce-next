import { Carousel } from '@/app/types/Carousel';
import styles from './styles.module.css'

interface ICarousel {
	items: Carousel[]
}

export default function Carousel({
	items
}: ICarousel) {
	return (
		<section className={styles.highlights}>
			<div className={styles.displays}>
				{items.map((item: Carousel) => (
					<span id={'highlights-' + item.id}>
						<a key={item.id} href={item.url_page}>
							<img src={item.url_img} alt={item.alt_img} />
						</a>
					</span>
				))}
			</div>
			<div className={styles.thumbs}>
				{items.map((item: Carousel) => (
					<a key={item.id}
						href={'#highlights-' + item.id} >
						<span className={styles.thumb}></span>
					</a>
				))}
			</div>
		</section>
	)
}