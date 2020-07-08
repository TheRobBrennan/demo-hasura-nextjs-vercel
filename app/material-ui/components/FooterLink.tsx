import { SFC } from "react"
import Link from "next/link"

// Material UI
import Typography from "@material-ui/core/Typography"

interface IFooterLink {
  url: string
  label: string
}

const FooterLink: SFC<IFooterLink> = ({ url, label }) => {
  return (
    <Link href={url} passHref>
      <Typography
        variant="body2"
        component="a"
        color="inherit"
        style={{ textDecoration: "none" }}
      >
        {label}
      </Typography>
    </Link>
  )
}
export default FooterLink
