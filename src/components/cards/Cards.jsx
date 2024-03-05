import { cards } from "@/data/cards";

const Cards = () => {
  return (
    <div>
      {cards.map((el) => {
        return (
        <>
        <h3>{el.title}</h3>
        <p>{el.description}</p>
        </>
        
        );
      })}
    </div>
  );
};
export default Cards;
