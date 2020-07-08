import { SFC } from "react"

// Components
import NavBarItem from "./NavBarItem"

const NavBar: SFC = () => {
  const MENU_SEPARATOR = " | "

  return (
    <nav>
      <NavBarItem url="/" label="Home" />
      {MENU_SEPARATOR}
      <NavBarItem url="/hello" label="Hello!" />
    </nav>
  )
}
export default NavBar
