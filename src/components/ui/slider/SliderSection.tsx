import Slider from "@/components/ui/slider/Slider";
import { Container } from "@mui/material";
import { SwiperOptions } from "swiper";
type Props = {
  hasContainer?: boolean;
  slides: JSX.Element[];
  swiperOptions: SwiperOptions
};
export default function SliderSection({swiperOptions,slides, hasContainer = true }: Props) {
  
  const sliderComponent = (
    <Slider swiperOptions={swiperOptions} slides={slides} />
  );

  if (hasContainer) {
    return <Container>{sliderComponent}</Container>;
  } else {
    return sliderComponent;
  }
}
