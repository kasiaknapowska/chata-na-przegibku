import Link from "next/link";
import {nav, navOpen} from "./links.module.scss"

const navLinks = [
    { label: "oferta", url: "/" },
    { label: "kontakt", url: "/kontakt" }
  ]
  
  const Links = ({isMenuOpen}) => {
    return (
        <nav className={`${!isMenuOpen && nav} ${isMenuOpen && navOpen}`}>
        {navLinks.map(link => (
          <Link href={link.url} key={link.url}>{link.label}</Link>
        ))}
      </nav>
    )
  }
  
  export default Links