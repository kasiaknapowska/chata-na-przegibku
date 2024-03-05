import { card, layer } from "./card.module.scss";

const Card = ({ title, description }) => {
  return (
    <div className={card}>
      <div className={layer}></div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Card;
