"use client"
import { useState } from "react";
import Hamburger from "../elements/hamburger/Hamburger";
import {navbar} from "./navbar.module.scss"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function onHamburgerClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className={navbar}>
      <div>Logo</div>
      <Hamburger onHamburgerClick={onHamburgerClick} isMenuOpen={isMenuOpen}/>
    </div>
  );
};

export default Navbar;
