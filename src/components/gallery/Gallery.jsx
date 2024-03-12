"use client";
import { gallery, lightbox } from "./gallery.module.scss";
import { galleryImages } from "@/data/galleryImages";

const Gallery = () => {
  return (
    <div className={gallery}>
      <ul>
        {/* <li className={lightbox}><img src={`/chata-na-przegibku-hero.jpg`} alt="" title=""></img></li> */}
        {galleryImages.map((img) => {
          return (
            <li key={img}>
              <img src={`/gallery/${img}.jpg`} alt={img} title={img}></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Gallery;
