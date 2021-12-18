import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
import Layout from '../components/layout';

const loggedIn = false;

function MyApp({ Component, pageProps }) {

  if (loggedIn) {
    <Layout>
      <Component {...pageProps} />
    </Layout>
  }

  return (<AnimatePresence>

    <Component {...pageProps} />
  </AnimatePresence>)
}

export default MyApp
