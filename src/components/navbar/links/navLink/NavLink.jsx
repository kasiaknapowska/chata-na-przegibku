"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.scss";

const NavLink = ({item}) => {
const pathName = usePathname();

  return (
    <Link href={item.path} className={pathName === item.path && styles.active}>{item.label}</Link>
  )
}

export default NavLink