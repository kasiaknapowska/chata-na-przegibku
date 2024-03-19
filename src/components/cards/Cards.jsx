"use client";
import { useState } from "react";
import Card from "./card/Card";
import { cardsContainer, conditionalInfo } from "./cards.module.scss";
import { cards } from "@/data/cards";

const Cards = () => {
  const [clicked, setClicked] = useState(0);
  const handleToggle = (i) => {
    if (clicked === i) {
    return setClicked(0);
    }
    setClicked(i);
  };
  return (
 <>
 <p className={conditionalInfo}>Kliknij na kafelek, by dowiedzieć się więcej.</p>
 <div className={cardsContainer}>
      {cards.map((el) => {
        return (
          <Card
            id={el.id}
            title={el.title}
            description={el.description}
            name={el.name}
            key={el.name}
            handleToggle={handleToggle}
            active={el.id === clicked ? true : false}
          />
        );
      })}
    </div>
 </>
  );
};
export default Cards;
