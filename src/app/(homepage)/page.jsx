import Image from "next/image";
import styles from "./page.module.scss";
import { contact } from "@/data/contact";

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
          zboczu Będoszki Wielkiej, na malowniczej przełęczy Przegibek otoczonej
          gęstymi lasami i majestatycznymi szczytami górskimi. Dzięki
          lokalizacji w pobliżu szlaków na Bendoszkę Wielką (z
          charakterystycznym Krzyżem), Wielką Raczę i Wielką Rycerzową, Chata na
          Przegibku stanowi idealną bazę wypadową do odkrywania uroków
          malowniczego Żywieckiego Parku Krajobrazowego. Okolica słynie z
          bogactwa gatunków roślin i zwierząt, a pobliskie rezerwaty przyrody,
          Śrubita i Dziobaki, stanowią prawdziwy raj dla miłośników natury.
          Kilka kroków od naszej Chaty znajduje się w schronisko górskie PTTK
          Przegibek, w którym serwowane są smaczne domowe obiady.
        </p>
        <p>
          Chata na Przegibku to nie tylko komfortowe miejsce noclegowe, ale
          przede wszystkim oaza spokoju i wytchnienia. To tutaj można
          zregenerować siły, nacieszyć się pięknem górskich krajobrazów i zaznać
          prawdziwej górskiej atmosfery.
        </p>
      </section>
      <section>
        <h2>Oferujemy</h2>
        <ul>
          <li>Kąpiel w bani</li>
          <li>Saunę</li>
          <li>Grill</li>
          <li>Gry planszowe</li>
          <li>Tennis stołowy</li>
          <li>Plac zabaw</li>
          <li>Imprezy okolicznościowe</li>
        </ul>
      </section>
      <section>
        <h2>W okolicy znajduje się</h2>
        <ul>
          <li>Stok narciarski (orczyk)</li>
          <li>Bacówka</li>
          <li>Kaplica Podwyższenia Krzyża Świętego</li>
          <li>Krzyż Jubileuszowy Ziemi Żywieckiej na szczycie</li>
        </ul>
      </section>
     </div>
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </div>
  );
}
