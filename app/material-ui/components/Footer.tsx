import { SFC } from "react"
import { TRB_NAME } from "../../config/constants"

// Retrieve the current version of our application
import { version } from "../../package.json"

// Material UI
import Typography from "@material-ui/core/Typography"

// Components
import FooterLink from "./FooterLink"

const Footer: SFC = () => {
  return (
    <Typography variant="body1" color="textSecondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()} {TRB_NAME}
      {". All rights reserved."}
      <br />
      {`Release v${version}`}
      {" | "}
      <FooterLink url="/#" label="Terms and conditions" />
      {" | "}
      <FooterLink url="/#" label="Privacy policy" />
    </Typography>
  )
}
export default Footer
