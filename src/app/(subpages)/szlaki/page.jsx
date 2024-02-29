"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { trails } from "@/data/trails";
import { useState } from "react";

export default function Szlaki() {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (i) => {
    if (clicked === i) {
      return setClicked("0");
    }
    setClicked(i);
  };
  console.log(clicked);
  return (
    <>
      <div className="container">
        <section>
          <h1>Szlaki turystyczne</h1>
          <p>
            Przez Przegibek przebiegają liczne szlaki turystyczne, co czyni
            naszą Chatę idealną bazą wypadową dla miłośników górskich wędrówek.
            Położenie Chaty na południowym zboczu Będoszki Wielkiej, w pobliżu
            charakterystycznego krzyża, ułatwia jej dostrzeżenie z pobliskich
            szlaków.
          </p>
        </section>
        <section>
          <h2>Szlaki turystyczne prowadzące do Chaty na Przegibku:</h2>

          {trails.map((trail) => {
            return (
              <div key={trail.id} className={styles.singleTrail}>
                <h3 className={styles.bold}>{trail.name}</h3>
                <div className={styles.legend}>
                  {trail.colors.map((color, i) => {
                    return (
                      <div key={i + color}>
                        <div
                          className={`${
                            color === "zielony" ? styles.green : undefined
                          } ${
                            color === "niebieski" ? styles.blue : undefined
                          } ${color === "czarny" ? styles.black : undefined} ${
                            styles.trail
                          }`}
                        ></div>
                        <p>Szlak {color}</p>
                      </div>
                    );
                  })}
                  <div className={styles.separator}></div>
                  <div>
                    <Image
                      src="/icon-distance-color.svg"
                      alt="TV"
                      width={32}
                      height={32}
                      priority
                    />
                    <p>{trail.distance} km</p>
                  </div>
                  <div className={styles.separator}></div>
                  <div>
                    <Image
                      src="/icon-on-foot-color.svg"
                      alt="TV"
                      width={32}
                      height={32}
                      priority
                    />
                    <p>{trail.onFoot}</p>
                  </div>
                  <div className={styles.separator}></div>
                  <p onClick={() => handleToggle(trail.id)}>
                    Więcej informacji <span className={clicked === trail.id ? styles.isShown : null}></span>
                  </p>
                </div>
                <div
                  className={`${styles.wrapper} ${
                    clicked === trail.id ? styles.isShown : null
                  }`}
                >
                  <p className={styles.inner}>{trail.info}</p>
                </div>
              </div>
            );
          })}
        </section>
        <section>
          <h2>Szlaki turystyczne prowadzące do pobliskich schronisk:</h2>
        </section>
      </div>
    </>
  );
}
