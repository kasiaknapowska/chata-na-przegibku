import { prices } from "@/data/prices";
import { contact } from "@/data/contact";
import styles from "./page.module.scss";

export default function Noclegi() {
  return (
    <div className="container">
      <h1>Noclegi</h1>
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
              <th>Ilość osób</th>
              <th>Łazienka</th>
              <th>TV</th>
              <th>Aneks kuchenny</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>Tak</td>
              <td>Tak</td>
              <td>Nie</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>
            <span>Pokój 2-osobowy z łazienką i TV</span> (I piętro)
          </li>
          <li>
            <span>Pokój 4-osobowy z łazienką i TV</span> (I piętro)
          </li>
          <li>
            <span>Pokój 6-osobowy z łazienką</span> (I piętro)
          </li>
          <li>
            <span>Pokój 4-osobowy z łazienką, TV i aneksem kuchennym</span> (I
            piętro)
          </li>
          <li>
            <span>Pokój 4-osobowy z łazienką na korytarzu</span> (poddasze) -
          </li>
        </ul>
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
