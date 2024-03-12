"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.scss";

const NavLink = ({item, setIsMenuOpen}) => {
const pathName = usePathname();

  return (
    <Link onClick={() => setIsMenuOpen(false)} href={item.path} className={pathName === item.path ? styles.active : undefined}>{item.label}</Link>
  )
}

export default NavLink