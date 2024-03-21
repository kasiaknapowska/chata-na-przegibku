"use client";
import { useState } from "react";
import { gallery } from "./gallery.module.scss";
import { galleryImages } from "@/data/galleryImages";
import { Lightbox } from "./Lightbox/Lightbox";
// import Image from "next/image";

const Gallery = () => {
  const [lightboxActive, setLightboxActive] = useState(false);
  const [index, setIndex] = useState(0);

  const showLightbox = (i) => {
    setLightboxActive(true);
    setIndex(i);
  };

// const getProportion = (img) => {
//   let imgHeigth = img.naturalHeight
//   let imgWidth = img.naturalWidth 
//   return imgWidth / imgHeigth
// }
// console.log(getProportion(document.querySelector("img")))
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
  // return (
  //   <div className={gallery}>
  //     {lightboxActive ? (
  //       <Lightbox
  //         images={galleryImages}
  //         index={index}
  //         setLightboxActive={setLightboxActive}
  //       />
  //     ) : null}
  //     <ul>
  //       {" "}
  //       {galleryImages.map((img, i) => {
  //         return (
  //           <li key={img} onClick={() => showLightbox(i)}>
           
  //               <Image
  //                 src={`/gallery/${img}.jpg`}
  //                 alt={img}
  //                 loading="lazy"
  //                 fill
  //                 title={img}
  //               />
            
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
// };
export default Gallery;
