"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HomeSlider from "./components/HomeSlider";
import PromoCard from "./components/PromoCard";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  const promoArr = [
    {
      src: "https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_RrZ0xeSg_c02f95ddb76543fb1895c7394ba6180baf7c618a.jpg",
      date: "2024-12-02 ~ 2024-12-02",
      text: "[12월 요월데이] '베리벨벳월드' 50%할인 받자!",
    },
    {
      src: "https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_AGaMl8V6_a6526a19eb071e3f896b37381788c5da6cca6ce8.jpg",
      date: "2024-12-02 ~ 2024-12-02",
      text: "[12월 요월데이] '베리벨벳월드' 50%할인 받자!",
    },
    {
      src: "https://www.yogurtworld.co.kr/data/file/main_promotion/f2272113e2cbb9fbc8bbb482c14eebbc_DxWLeyJ1_9decfa8f4520d7c7aef4662e9e0c125657345258.jpg",
      date: "2024-12-02 ~ 2024-12-02",
      text: "[12월 요월데이] '베리벨벳월드' 50%할인 받자!",
    },
  ];
  return (
    <>
      <HomeSlider />
      <section>
        <h3>Promotion</h3>
        <div>요거트 월드의 다양한 혜택과 이벤트를 만나보세요</div>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation={false}
          pagination={{
            type: "bullets",
          }}
          spaceBetween={10}
          slidesPerView={4}
          loop={true}
          slidesPerGroup={2}
        >
          {promoArr.map((v, idx) => (
            <SwiperSlide key={idx}>
              <PromoCard {...v} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
