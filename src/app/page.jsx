import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <img src="chata-na-przegibku.jpg"/> */}
      <div className={styles.imgContainer}>
        <Image
          src="/chata-na-przegibku-hero.jpg"
          alt="chata na przegibku"
          fill
        />
      </div>
      <div className="heroPlaceholder"></div>
      <section className="container">
        <h2>Gdzie nas znajdziesz?</h2>
        <p>
          Jeśli marzy Wam się odpoczynek w górach na łonie natury Urokliwe
          wschody i zachody słońca to serdecznie zapraszamy do nas!
        </p>
        <p>
          Chata na Przegibku znajduje się w miejscowości Rycerka Górna na
          przełęczy Przegibek. W pobliżu szlaków na Bendoszkę Wielką, Wielką
          Raczę i Wielką Rycerzową. W kilka kroków możesz znaleźć się w
          schronisku górskim PTTK Przegibek, w którym zjesz smaczne domowe
          obiady.
        </p>
      </section>
      <section className="container">
        <h2>O chacie</h2>
        <p>
          W naszej chacie na parterze mamy piękną przestronną jadalnię z
          kominkiem oraz TV, w której chętnie zorganizujemy wszelakie imprezy
          okolicznościowe. Na piętrze znajdują się 4 pokoje, które pomieszczą do
          20 osób.
        </p>
        <ol>
          <li>1 pokój - 2 osobowy + łazienka + TV </li>
          <li>2 pokój - 4 osobowy + łazienka + TV</li>
          <li>3 pokój - 6 osobowy + łazienka</li>
          <li>4 pokój - 4 osobowy + łazienka + TV + aneks kuchenny</li>
        </ol>
        <p>
          Dodatkowo na poddaszu znajduje się 4 osobowy pokój z łazienką na
          korytarzu.{" "}
        </p>
      </section>
      <section className="container">
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
      <section className="container">
        <h2>W okolicy znajduje się</h2>
        <ul>
          <li>Stok narciarski (orczyk)</li>
          <li>Bacówka</li>
          <li>Kaplica Podwyższenia Krzyża Świętego</li>
          <li>Krzyż Jubileuszowy Ziemi Żywieckiej na szczycie</li>
        </ul>
      </section>
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
    </main>
  );
}
