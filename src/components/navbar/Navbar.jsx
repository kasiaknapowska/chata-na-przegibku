"use client"
import { useState } from "react";
import Link from "next/link";
import Hamburger from "../elements/hamburger/Hamburger";
import {navbar, nav, navOpen} from "./navbar.module.scss"

const navLinks = [
    { label: "oferta", url: "/" },
    { label: "kontakt", url: "/kontakt" }
  ]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function onHamburgerClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className={navbar}>
      <div>Logo</div>
      <Hamburger onHamburgerClick={onHamburgerClick} isMenuOpen={isMenuOpen}/>
      <nav className={`${!isMenuOpen && nav} ${isMenuOpen && navOpen}`}>
        {navLinks.map(link => (
          <Link href={link.url} key={link.url}>{link.label}</Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
