import { SFC } from "react"
import Link from "next/link"

// Material UI
import Typography from "@material-ui/core/Typography"

interface INavBarItem {
  url: string
  label: string
}

const NavBarItem: SFC<INavBarItem> = ({ url, label }) => {
  return (
    <Link href={url} passHref>
      <Typography
        variant="body1"
        component="a"
        color="secondary"
        style={{ textDecoration: "none" }}
      >
        {label}
      </Typography>
    </Link>
  )
}
export default NavBarItem
