import { Carousel } from "../types/Carousel";

export const carouselData: Carousel[] = Array.from({ length: 5 }, (_, i) => {
    return {
        id: i,
        url_page: `#highlights-${i}`,
        url_img: `#highlights-${i}`,
        alt_img: `#highlights-${i}`
    }
  });
  