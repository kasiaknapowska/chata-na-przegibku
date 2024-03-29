import Link from "next/link";
import "@/styles/globals.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function SubpageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}
      <section className="container"><Link href="/">Wróć na stronę główną</Link></section>
      </main>
      <Footer />
    </>
  );
}
