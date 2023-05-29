import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
type Props = {
  slides: JSX.Element[];
  swiperOptions?: SwiperOptions;
};

export default function Slider({ slides, swiperOptions }: Props) {
  return (
    <Swiper
      {...swiperOptions}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
