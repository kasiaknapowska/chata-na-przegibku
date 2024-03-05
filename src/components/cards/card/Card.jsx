import Image from "next/image";
import { card, layer, layerActive, pActive, imgContainer } from "./card.module.scss";

const Card = ({ id, title, description, name, handleToggle, active }) => {
  return (
    <div className={card} onClick={() => handleToggle(id)}>
      <div className={`${layer} ${active ? layerActive : undefined}`} ></div>
      <div>
        <h3>{title}</h3>
        <p className={active ? pActive : undefined}>{description}</p>
      </div>
      <div className={imgContainer} >
      <Image src={`/cards/${name}.jpg`} alt={title} fill sizes="(max-width: 500px) 100vw, (max-width: 1200px) 50vw, 30vw"/>
      </div>
    </div>
  );
};
export default Card;
