import {hamburger, open} from "./hamburger.module.scss"

const Hamburger = ({onHamburgerClick, isMenuOpen}) => {

  return (
    <div
      role="presentation"
      onClick={() => onHamburgerClick()}
      className={`${hamburger} ${isMenuOpen && open}`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hamburger
