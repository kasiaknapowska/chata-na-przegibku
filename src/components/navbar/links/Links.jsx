import styles from "./links.module.scss"
import NavLink from "./navLink/NavLink";

const navLinks = [
    { label: "noclegi", path: "/noclegi" },
    { label: "szlaki", path: "/szlaki" },
    { label: "kontakt", path: "/kontakt" },
  ]
  
  const Links = ({type, isMenuOpen}) => {
    return (
        <nav className={`${!isMenuOpen ? styles.nav : undefined} ${type === "hero" ? styles.hero : undefined} ${isMenuOpen ? styles.navOpen : undefined}`}>
        {navLinks.map(link => (
          <NavLink item={link} key={link.label}/>
        ))}
      </nav>
    )
  }
  
  export default Links