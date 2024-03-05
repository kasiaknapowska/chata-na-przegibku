import Card from "./card/Card";
import { cardsContainer } from "./cards.module.scss";
import { cards } from "@/data/cards";

const Cards = () => {
  return (
    <div className={cardsContainer}>
      {cards.map((el) => {
        return (
          <Card title={el.title} description={el.description}/>
        );
      })}
    </div>
  );
};
export default Cards;
