import { getSlider } from "../../api/sliderApi";
import Slider from "./Slider";

export default async function SliderContainer() {
  const data = await getSlider();

  return Slider(data);
}