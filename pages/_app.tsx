import '../styles/globals.css'
import '../App.css'
import type { AppProps } from 'next/app'
import {BasketContextProvider} from "../components/BasketContext";

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <BasketContextProvider>
        <Component {...pageProps} />
      </BasketContextProvider>
  )
}

export default MyApp
