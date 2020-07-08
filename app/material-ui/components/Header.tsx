import { SFC } from "react"
import { TRB_NAME } from "../../config/constants"

// Material UI
import Typography from "@material-ui/core/Typography"
import NavBar from "./NavBar"

const Header: SFC = () => {
  const title = TRB_NAME

  return (
    <header id="header">
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <NavBar />
    </header>
  )
}
export default Header
