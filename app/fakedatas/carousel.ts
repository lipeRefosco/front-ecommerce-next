import { Carousel } from "../types/Carousel";
import bannerModel from "../assets/BannerModel.jpg"


export const carouselData: Carousel[] = Array.from({ length: 5 }, (_, i) => {
    return {
        id: i,
        url_page: `#highlights-${i}`,
        url_img: bannerModel.src,
        alt_img: `#highlights-${i}`
    }
  });
  