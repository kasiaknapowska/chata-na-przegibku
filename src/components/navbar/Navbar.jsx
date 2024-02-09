"use client"
import { useState } from "react";
import Hamburger from "./hamburger/Hamburger";
import Links from "./links/Links";
import styles from "./navbar.module.scss"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function onHamburgerClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className={`${styles.navbar} container`}>
      <div>Logo</div>
      <Hamburger onHamburgerClick={onHamburgerClick} isMenuOpen={isMenuOpen}/>
      <Links isMenuOpen={isMenuOpen}/>
    </div>
  );
};

export default Navbar;
