import dummyData from "@/helpers/dummyData";
import SmallCard from "@/components/ui/smallCard/smallCard";
import { SmallCardModel } from "@/components/ui/smallCard/core/_models";
import SliderSection from "../ui/slider/SliderSection";

export default function CarList() {
  const swiperOptions = {
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  const initCarsData = (): JSX.Element[] => {
    return dummyData.map((slide: SmallCardModel) => <SmallCard {...slide} />);
  };
  return <SliderSection swiperOptions={swiperOptions} slides={initCarsData()} />;
}
