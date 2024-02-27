import Image from "next/image";
import { prices } from "@/data/prices";
import { contact } from "@/data/contact";
import styles from "./page.module.scss";

export default function Noclegi() {
  return (
    <div className="container">
      <h1>Noclegi w Chacie na Przegibku</h1>
      <section>
        <h2>Cennik</h2>
        <table className={styles.pricesTable}>
          <tbody>
            <tr>
              <td>Dorośli i dzieci od 7 lat</td>
              <td>{prices.adults} zł&nbsp;/&nbsp;osobę</td>
            </tr>
            <tr>
              <td>Dzieci do 7 lat</td>
              <td>{prices.kid7} zł&nbsp;/&nbsp;osobę</td>
            </tr>
            <tr>
              <td>Dzieci do 3 lat</td>
              <td>{prices.kid3}</td>
            </tr>
          </tbody>
        </table>
        <a href={`tel:${contact.phone}`} className="btn">
          Zarezerwuj pobyt
        </a>
      </section>
      <section>
        <h2>Pokoje</h2>
        <p>
          Chata na Przegibku oferuje komfortowe noclegi w pokojach o różnym
          standardzie, idealne zarówno dla par szukających romantycznego wyjazd,
          rodzin z dziećmi, grupy przyjaciów, jak i grup zorganizowanych. Cztery
          pokoje z łazienkami znajdują się na piętrze naszej Chaty. Jeden pokój
          - ekonomiczna opcja dla turystów nastawionych na zwiedzanie -
          zlokalizowany jest na poddaszu i posiada łazienkę dostępną na
          korytarzu. Wszystkie pokoje są urządzone w przytulnym, górskim
          klimacie, zapewniając komfortowy wypoczynek po dniu pełnym górskich
          przygód.
        </p>
        <table>
          <thead>
            <tr>
              <th>Pokój</th>
              <th>Udogodnienia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2-os.</td>
              <td>
                {" "}
                <Image
                  src="/icon-bathroom-color.svg"
                  alt="łazienka"
                  width={24}
                  height={24}
                  priority
                />
                &nbsp;&nbsp;&nbsp;
                <Image
                  src="/icon-TV-color.svg"
                  alt="TV"
                  width={24}
                  height={24}
                  priority
                />
              </td>
            </tr>
            <tr>
              <td>4-os.</td>
              <td>
                <Image
                  src="/icon-bathroom-color.svg"
                  alt="łazienka"
                  width={24}
                  height={24}
                  priority
                />
                &nbsp;&nbsp;&nbsp;
                <Image
                  src="/icon-TV-color.svg"
                  alt="TV"
                  width={24}
                  height={24}
                  priority
                />
              </td>
            </tr>
            <tr>
              <td>6-os.</td>
              <td>
                <Image
                  src="/icon-bathroom-color.svg"
                  alt="łazienka"
                  width={24}
                  height={24}
                  priority
                />
              </td>
            </tr>
            <tr>
              <td>4-os.</td>
              <td>
                <Image
                  src="/icon-bathroom-color.svg"
                  alt="łazienka"
                  width={24}
                  height={24}
                  priority
                />
                &nbsp;&nbsp;&nbsp;
                <Image
                  src="/icon-TV-color.svg"
                  alt="TV"
                  width={24}
                  height={24}
                  priority
                />
                &nbsp;&nbsp;&nbsp;
                <Image
                  src="/icon-kitchen-color.svg"
                  alt="kuchnia"
                  width={24}
                  height={24}
                  priority
                />
              </td>
            </tr>
            <tr>
              <td>4-os.</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.legend}>
          <div>
            <Image
              src="/icon-bathroom-color.svg"
              alt="łazienka"
              width={24}
              height={24}
              priority
            />
            &nbsp;&nbsp;Łazienka
          </div>
          <div>
            <Image
              src="/icon-TV-color.svg"
              alt="TV"
              width={24}
              height={24}
              priority
            />
            &nbsp;&nbsp;TV
          </div>
          <div>
            <Image
              src="/icon-kitchen-color.svg"
              alt="kuchnia"
              width={24}
              height={24}
              priority
            />
            &nbsp;&nbsp;Kuchnia
          </div>
        </div>

        <a href={`tel:${contact.phone}`} className="btn">
          Zapytaj o dostępność
        </a>
      </section>
      <section>
        <h2>Kuchnia i jadalnia dla gości</h2>
        <p>
          Na parterze znajduje się przestronna jadalnia z kominkiem i TV, gdzie
          można zjeść posiłek, odpocząć po wędrówce lub zorganizować imprezę
          okolicznościową. Do dyspozycji naszych gości przestronna, w pełni
          wyposażona kuchnia, w której można przygotować własne posiłki.
        </p>
      </section>
    </div>
  );
}
