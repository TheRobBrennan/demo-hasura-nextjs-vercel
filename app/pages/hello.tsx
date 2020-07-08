import { NextPage } from "next"

import Header from "../components/Header"

// Material UI
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Layout from "../material-ui/Layout"

const HelloPage: NextPage = () => {
  return <Layout>Hello from TypeScript!</Layout>
}
export default HelloPage
