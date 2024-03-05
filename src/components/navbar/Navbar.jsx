"use client"
import { useState } from "react";
import Image from "next/image";
import Hamburger from "./hamburger/Hamburger";
import Links from "./links/Links";
import styles from "./navbar.module.scss"
import Link from "next/link";


const Navbar = ({type}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function onHamburgerClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className={`${styles.navbar} container`}>
      <Link href="/">
      <Image
              src={type === "hero" ? "/logo-white.svg" : "/logo-color.svg"}
              alt="Chata na Przegibku Logo"
              width={180}
              height={100}
              priority
            />
      </Link>
      <Hamburger type={type} onHamburgerClick={onHamburgerClick} isMenuOpen={isMenuOpen}/>
      <Links type={type} isMenuOpen={isMenuOpen} onHamburgerClick={onHamburgerClick}/>
    </header>
  );
};

export default Navbar;
