import { NextPage } from "next"

import Header from "../components/Header"

// Material UI
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"

const HelloPage: NextPage = () => {
  return (
    <Container>
      <Box my={4}>
        <Header />
        <hr />
        Hello from TypeScript!
      </Box>
    </Container>
  )
}
export default HelloPage
