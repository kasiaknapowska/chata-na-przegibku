import { Montserrat } from "next/font/google";
import "@/styles/globals.scss";
import { contact } from "@/data/contact";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Chata na Przegibku",
  description: `Chata z widokiem na góry, położona na przełęczy Przegibek oferująca noclegi w pokojach z łazienkami. Rezerwacja telefoniczna: ${contact.phoneLabel}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
