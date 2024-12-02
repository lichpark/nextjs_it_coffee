import { useSwiper } from "swiper/react";

const PrevButton = () => {
  const swiper = useSwiper();
  const handleNext = () => {
    swiper.slidePrev();
  };
  return <button onClick={handleNext}>이전</button>;
};

export default PrevButton;
