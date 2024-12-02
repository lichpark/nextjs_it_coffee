import { Swiper, SwiperSlide } from "swiper/react";
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
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
const HomeSlider = () => {
  return (
    <section
      style={{
        width: "100vw",
        height: "600px",
        padding: "50px 60px",
        backgroundColor: "#F3F8FF",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          //border: "1px solid #eeeeee",
          borderRadius: "30px",
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            type: "bullets",
          }}
          navigation={true}
          spaceBetween={1}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 1000 }}
        >
          <SwiperSlide>
            <div
              style={{
                width: "100%",

                textAlign: "center",
              }}
            >
              <img
                style={{ width: "100%", borderRadius: "30px" }}
                src="https://www.yogurtworld.co.kr/data/file/main_main/f2272113e2cbb9fbc8bbb482c14eebbc_ISiCANDW_3b2c0e4eb894a6c9670b56050461e8a1c4865dc0.jpg"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <img
                style={{ width: "100%", borderRadius: "30px" }}
                src="https://www.yogurtworld.co.kr/data/file/main_main/f2272113e2cbb9fbc8bbb482c14eebbc_G6yn3Q8j_5ee75a492b8839f32abc866afe604f13982ebf7a.jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <img
                style={{ width: "100%", borderRadius: "30px" }}
                src="https://www.yogurtworld.co.kr/data/file/main_main/f2272113e2cbb9fbc8bbb482c14eebbc_4glinjhu_ed4450027e2893e6a6f51e8cd4b7858500be993e.jpg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
