import 'semantic-ui-css/semantic.min.css'
import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import { MediaQueryProvider } from '../contexts/MediaQuery'

export default ({ Component, pageProps }) => {
  return (
    <MediaQueryProvider>
      <Component {...pageProps} />
      <Footer />
    </MediaQueryProvider>
  )
}
