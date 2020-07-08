import Router from "next/router"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/App.css"

// Google Analytics
import * as gtag from "../analytics/google-analytics"
Router.events.on("routeChangeComplete", (url) => gtag.pageview(url))

// Material UI
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../material-ui/theme"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Component {...pageProps}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Component>
  )
}
