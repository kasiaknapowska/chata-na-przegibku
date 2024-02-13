import { Inter, Montserrat } from "next/font/google";
import "@/styles/globals.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Chata na Przegibku",
  description:
    "Chata z widokiem na góry, położona na przełęczy Przegibek oferująca noclegi w pokojach z łazienkami.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
