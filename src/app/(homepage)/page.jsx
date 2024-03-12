import Image from "next/image";
import styles from "./page.module.scss";
import { contact } from "@/data/contact";
import Cards from "@/components/cards/Cards";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.heroPlaceholder}>
        <h1 className="hero">
          <span>Czekamy na Ciebie</span> <br></br>w sercu <br></br>Beskidu
          Żywieckiego
        </h1>
        <a href={`tel:${contact.phone}`} className={styles.heroButton}>
          Zarezerwuj nocleg
        </a>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/chata-na-przegibku-hero.jpg"
          alt="chata na przegibku"
          loading="lazy"
          fill
        />
      </div>

      <div className="container">
        <section>
          <h2>Poczuj magię gór w Chacie na Przegibku</h2>
          <p>
            Jeśli marzy Wam się odpoczynek w górach na łonie natury, urokliwe
            wschody i zachody słońca, zapierające dech w piersiach górskie
            krajobrazy - serdecznie zapraszamy do Chaty na Przegibku!
          </p>
          <p>
            Nasza Chata położona jest na wysokości 1000 m n.p.m. w Beskidzie
            Żywieckim, w miejscowości Rycerka Górna. Znajduje się na południowym
            zboczu Będoszki Wielkiej, na malowniczej przełęczy Przegibek
            otoczonej gęstymi lasami i majestatycznymi szczytami górskimi.
            Dzięki lokalizacji w pobliżu szlaków na Bendoszkę Wielką (z
            charakterystycznym Krzyżem), Wielką Raczę i Wielką Rycerzową, Chata
            na Przegibku stanowi idealną bazę wypadową do odkrywania uroków
            malowniczego Żywieckiego Parku Krajobrazowego. Okolica słynie z
            bogactwa gatunków roślin i zwierząt, a pobliskie rezerwaty przyrody,
            Śrubita i Dziobaki, stanowią prawdziwy raj dla miłośników natury.
            Kilka kroków od naszej Chaty znajduje się w schronisko górskie PTTK
            Przegibek, w którym serwowane są smaczne domowe obiady.
          </p>
          <p>
            Chata na Przegibku to nie tylko komfortowe miejsce noclegowe, ale
            przede wszystkim oaza spokoju i wytchnienia. To tutaj można
            zregenerować siły, nacieszyć się pięknem górskich krajobrazów i
            zaznać prawdziwej górskiej atmosfery.
          </p>
        </section>

        <section>
          <h2>Chata na Przegibku to:</h2>
          <ul>
            <li>Komfortowe noclegi w pokojach o różnym standardzie</li>
            <li>Piękna, przestronna jadalnia z kominkiem i TV</li>
            <li>Możliwość organizacji imprez okolicznościowych</li>
            <li>Przytulna atmosfera i górskie klimaty</li>
            <li>Idealna baza wypadowa na szlaki turystyczne</li>
          </ul>
        </section>
        <section>
          <h2>Atrakcje w Chacie i najbliższej okolicy</h2>
          <p>
            U nas nie będziesz się nudzić! Naszym gościom polecamy skorzystanie
            z gorących kąpieli w bani, wieczorne biesiady przy ognisku, a zimową
            porą szusowanie po kameralnym oświetlonym stoku narciarskim. Sprawdź, co
            jeszcze u nas znajdziesz! {" "} 
          </p>
          <Cards />
        </section>
      </div>
      
    </div>
  );
}
