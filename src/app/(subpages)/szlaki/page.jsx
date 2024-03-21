"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { przegibekTrails } from "@/data/trails";
import { links } from "@/data/links";
import { contact } from "@/data/contact";
import { useState } from "react";

export default function Szlaki() {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (i) => {
    if (clicked === i) {
      return setClicked("0");
    }
    setClicked(i);
  };

  return (
    <>
      <div className="container">
        <section>
          <h1>Szlaki turystyczne</h1>
          <p>
            Przez Przegibek przebiegają liczne szlaki turystyczne, co czyni
            naszą Chatę idealną bazą wypadową dla miłośników górskich wędrówek.
            Położenie Chaty na południowym zboczu Bendoszki Wielkiej, w pobliżu
            charakterystycznego krzyża, ułatwia jej dostrzeżenie z pobliskich
            szlaków.
          </p>
        </section>

        {przegibekTrails.map((el, i) => {
          return (
            <section key={i}>
              <h2>{el.title}</h2>

              {el.trails.map((trail) => {
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
                              } ${
                                color === "czarny" ? styles.black : undefined
                              } ${styles.trail} 
                        } ${color === "żółty" ? styles.yellow : undefined} ${
                                styles.trail
                              }
                          ${color === "czerwony" ? styles.red : undefined}`}
                            ></div>
                            <p>Szlak {color}</p>
                          </div>
                        );
                      })}
                      <div className={styles.separator}></div>
                      <div>
                        <Image
                          src="icons/icon-distance-color.svg"
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
                          src="icons/icon-on-foot-color.svg"
                          alt="TV"
                          width={32}
                          height={32}
                          priority
                        />
                        <p>{trail.onFoot}</p>
                      </div>
                      <div className={styles.separator}></div>
                      <p onClick={() => handleToggle(trail.id)}>
                        Więcej informacji{" "}
                        <span
                          className={
                            clicked === trail.id ? styles.isShown : null
                          }
                        ></span>
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
          );
        })}
        <section>
          <h2>Przydatne rady dla turystów</h2>
          <ul>
            <li>
              Należy zabrać ze sobą odpowiednią odzież i obuwie do wędrówek
              górskich.
            </li>
            <li>
              W zimie należy zaopatrzyć się w rakiety śnieżne. Można je
              wypożyczyć w znajdującym się obok Chaty Schronisku PTTK na
              Przegibku i oddać w innym schronisku.
            </li>
            <li>Należy zabrać ze sobą wystarczającą ilość wody i prowiantu.</li>
            <li>
              Należy poinformować kogoś o planowanym szlaku i godzinie powrotu.
            </li>
            <li>
              Należy zachować ostrożność podczas wędrówki i stosować się do
              zasad bezpieczeństwa.
            </li>
          </ul>
        </section>
        <section>
          <h2>Chcesz zaplanować trasę wycieczki? </h2>
          <p>
            Skorzystaj z poniższej mapy i opisów udostępnionych przez turystów.{" "}
          </p>

          <a
            href={links.mapaTurystyczna}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "16px", minWidth: "230px" }}
          >
            Mapa turystyczna
          </a>
          <a
            href={links.szlakiTurystyczne}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ minWidth: "230px" }}
          >
            Szlaki turystyczne
          </a>
        </section>

        <section>
          <h3>Masz pytania? Zadzwoń do nas - tel. <a href={`tel:${contact.phone}`} className="h3style">
          {contact.phoneLabel}
        </a></h3>
        </section>
      </div>
    </>
  );
}
