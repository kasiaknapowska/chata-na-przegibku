"use client";
import { gallery } from "./gallery.module.scss";
import { galleryImages } from "@/data/galleryImages";

const Gallery = () => {
  return (
    <div className={gallery}>
      <ul>
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
