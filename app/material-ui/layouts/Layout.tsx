import { SFC } from "react"
import Head from "next/head"
import {
  TRB_NAME,
  TRB_DESCRIPTION,
  TRB_KEYWORDS,
  TRB_SITE_URL,
  TRB_APPLICATION_TYPE,
  TRB_LOGO_URL,
  TRB_TWITTER_ACCOUNT,
} from "../../config/constants"

// Material UI
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Header from "../components/Header"
import Footer from "../components/Footer"

// Bootstrap
import BootstrapHeader from "../../components/Header"

interface ILayout {
  children?: JSX.Element[] | JSX.Element
}

const Layout: SFC<ILayout> = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>{TRB_NAME}</title>
        <meta
          property="description"
          content={TRB_DESCRIPTION}
          key="description"
        />
        <meta property="keywords" content={TRB_KEYWORDS} key="keywords" />
        <meta property="og:title" content={TRB_NAME} key="og:title" />

        {/* Open Graph */}
        <meta
          property="og:description"
          content={TRB_DESCRIPTION}
          key="og:description"
        />
        <meta property="og:url" content={TRB_SITE_URL} key="og:url" />
        <meta property="og:type" content={TRB_APPLICATION_TYPE} key="og:type" />
        <meta property="og:image" content={TRB_LOGO_URL} key="og:image" />

        {/* Twitter */}
        <meta
          property="twitter:creator"
          content={TRB_TWITTER_ACCOUNT}
          key="twitter:creator"
        />
        <meta property="twitter:title" content={TRB_NAME} key="twitter:title" />
        <meta
          property="twitter:description"
          content={TRB_DESCRIPTION}
          key="twitter:description"
        />
        <meta
          property="twitter:image"
          content={TRB_LOGO_URL}
          key="twitter:image"
        />
      </Head>
      <Box my={4}>
        <BootstrapHeader />
        <Header />
        <hr />
        {children}
        <Footer />
      </Box>
    </Container>
  )
}
export default Layout
