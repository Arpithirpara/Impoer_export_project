"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./main.module.css";

const heroBanners = [
  {
    id: 1,
    image: "/Hero_slider_img/Hero_img_1.png",
    alt: "Agricultural Export Banner 1",
  },
  {
    id: 2,
    image: "/Hero_slider_img/Hero_img_2.png",
    alt: "Agricultural Export Banner 2",
  },
  {
    id: 3,
    image: "/Hero_slider_img/Hero_img_3.png",
    alt: "Agricultural Export Banner 3",
  },
];

export default function Main_section() {
  return (
    <section className={styles.banner}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className={styles.swiper}
      >
        {heroBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className={styles.slide}>
              <img
                src={banner.image}
                alt={banner.alt}
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}