import { gallery } from "./gallery.module.scss";

const Gallery = () => {
  return (
    <div className={gallery}>
        <ul>
      <li><img src="/chata-na-przegibku-hero.jpg" alt="" title="chata"></img></li>
      <li><img src="/chata-na-przegibku-hero.jpg" alt=""></img></li>
      <li><img src="/chata-na-przegibku-hero.jpg" alt=""></img></li>
      <li><img src="/chata-na-przegibku-hero.jpg" alt=""></img></li>
      <li><img src="/chata-na-przegibku-hero.jpg" alt=""></img></li>
    </ul>
    </div>
  );
};
export default Gallery;
