import styles from "./links.module.scss"
import NavLink from "./navLink/NavLink";

const navLinks = [
    { label: "noclegi", path: "/noclegi" },
    { label: "kontakt", path: "/kontakt" }
  ]
  
  const Links = ({type, isMenuOpen}) => {
    return (
        <nav className={`${!isMenuOpen && styles.nav} ${type === "hero" && styles.hero} ${isMenuOpen && styles.navOpen}`}>
        {navLinks.map(link => (
          <NavLink item={link} key={link.label}/>
        ))}
      </nav>
    )
  }
  
  export default Links