import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (

      <section
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          textAlign: "center",
          
        }}
      >
        <Link href="/">
          <Image
            src="/logo-color.svg"
            alt="Chata na Przegibku Logo"
            width={220}
            height={100}
            priority
          />
        </Link>
        <h1 style={{fontSize: "36px", fontWeight: "400", lineHeight: "130%"}}>Strona nie istnieje</h1>
        <Link href="/" style={{color: "#15181c", textDecoration: "none"}}>Wróć na stronę główną</Link>
      </section>

  );
}
