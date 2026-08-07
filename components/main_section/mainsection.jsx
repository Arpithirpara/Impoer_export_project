"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import styles from "./main.module.css";
import Link from "next/link";

export default function Main_section() {
  return (
    <section className={styles.banner}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className={styles.swiper}
      >
        {/* Image Slide */}
        <SwiperSlide>
          <div className={styles.slide}>
            <Image
              src="/mainsecton_img/import_export_banner.png"
              alt="Banner"
              fill
              priority
              className={styles.image}
            />

            <div className={styles.overlay}></div>

            <div className={styles.content}>
              <h1>Fresh Agricultural Products</h1>
              <p>
                Import & Export of Premium Quality Fruits, Vegetables,
                Grains & Spices Worldwide.
              </p>
               
               <Link href='/product'>
              <button className={styles.button}>
                Explore Products
              </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Video Slide */}
        <SwiperSlide>
          <div className={styles.slide}>
            <video
              className={styles.video}
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="/video/kling_20260721_VIDEO_Drone_flyi_4739_0.mp4"
                type="video/mp4"
              />
            </video>

            <div className={styles.overlay}></div>

            <div className={styles.content}>
              <h1>Fresh Agricultural Products</h1>
              <p>
                Import & Export of Premium Quality Fruits, Vegetables,
                Grains & Spices Worldwide.
              </p>
              <Link href='/product'>
              <button className={styles.button}>
                Explore Products
              </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}