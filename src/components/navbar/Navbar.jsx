"use client"
import { useState } from "react";
import Image from "next/image";
import Hamburger from "./hamburger/Hamburger";
import Links from "./links/Links";
import styles from "./navbar.module.scss"
import Link from "next/link";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function onHamburgerClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className={`${styles.navbar} container`}>
      <Link href="/">
      <Image
              src="/logo.svg"
              alt="Chata na Przegibku Logo"
              // className={styles.logo}
              width={220}
              height={100}
              priority
            />
      </Link>
      <Hamburger onHamburgerClick={onHamburgerClick} isMenuOpen={isMenuOpen}/>
      <Links isMenuOpen={isMenuOpen}/>
    </div>
  );
};

export default Navbar;
