import "@/styles/globals.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar type="hero" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
