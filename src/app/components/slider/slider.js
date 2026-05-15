// Đường dẫn: src/components/slider/slider.js
'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./slider.module.css";

export default function ProductSlider({ images, productName }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className={styles.slideItem}>
            <div className={styles.imageContainer}>
              <Image 
                src={img} 
                alt={`${productName} - ${index + 1}`} 
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}