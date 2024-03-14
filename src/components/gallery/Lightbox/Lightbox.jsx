"use client";
import { useState } from "react";
import { sliderNav, lightbox, closeBtn } from "./lightbox.module.scss";

export const Lightbox = ({ images, index, setLightboxActive }) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className={lightbox}>
      <div className={sliderNav}>
        <div role="presentation" onClick={goToPrevious}></div>
        <div role="presentation" onClick={goToNext}></div>
      </div>
      <div
        className={closeBtn}
        role="presentation"
        onClick={() => setLightboxActive(false)}
      >
        <span></span>
        <span></span>
      </div>
      <img
        src={`/gallery/${images[currentIndex]}.jpg`}
        alt={images[currentIndex]}
        title={images[currentIndex]}
      ></img>
    </div>
  );
};
