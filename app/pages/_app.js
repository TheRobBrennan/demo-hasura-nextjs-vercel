import Router from "next/router"

import * as gtag from "../analytics/google-analytics"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/App.css"

// Google Analytics
Router.events.on("routeChangeComplete", (url) => gtag.pageview(url))

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
