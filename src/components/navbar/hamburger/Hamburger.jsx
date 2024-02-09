import styles from "./hamburger.module.scss"

const Hamburger = ({onHamburgerClick, isMenuOpen}) => {

  return (
    <div
      role="presentation"
      onClick={() => onHamburgerClick()}
      className={`${styles.hamburger} ${isMenuOpen && styles.open}`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hamburger
