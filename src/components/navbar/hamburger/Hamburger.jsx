import styles from "./hamburger.module.scss"

const Hamburger = ({type, onHamburgerClick, isMenuOpen}) => {

  return (
    <div
      role="presentation"
      onClick={() => onHamburgerClick()}
      className={`${styles.hamburger} ${type === "hero" && styles.hero} ${isMenuOpen && styles.open}`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hamburger
