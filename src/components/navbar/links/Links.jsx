import styles from "./links.module.scss"
import NavLink from "./navLink/NavLink";
import { navLinks } from "@/data/navLinks";

  
  const Links = ({type, isMenuOpen, setIsMenuOpen}) => {
    return (
        <nav className={`${!isMenuOpen ? styles.nav : undefined} ${type === "hero" ? styles.hero : undefined} ${isMenuOpen ? styles.navOpen : undefined}`}>
        {navLinks.map(link => (
          <NavLink item={link} key={link.label} setIsMenuOpen={setIsMenuOpen}/>
        ))}
      </nav>
    )
  }
  
  export default Links