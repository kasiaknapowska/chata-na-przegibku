"use client";
import { useState } from "react";
import { gallery } from "./gallery.module.scss";
import { galleryImages } from "@/data/galleryImages";
import { Lightbox } from "./Lightbox/Lightbox";

const Gallery = () => {
  const [lightboxActive, setLightboxActive] = useState(false);
  const [index, setIndex] = useState(0);

  const showLightbox = (i) => {
    setLightboxActive(true);
    setIndex(i);
  };

  return (
    <div className={gallery}>
      {lightboxActive ? <Lightbox images={galleryImages} index={index} setLightboxActive={setLightboxActive}/> : null}
      <ul>
        {" "}
        {galleryImages.map((img, i) => {
          return (
            <li key={img} onClick={() => showLightbox(i)}>
              <img src={`/gallery/${img}.jpg`} alt={img} title={img}></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Gallery;
