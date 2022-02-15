import '../styles/globals.css'
import '../App.css'
import type { AppProps } from 'next/app'
import {BasketContextProvider} from "../components/BasketContext";
import {useEffect} from "react";
import {API, graphqlOperation} from "aws-amplify";
import * as subscriptions from "../src/graphql/subscriptions";

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <BasketContextProvider>
        <Component {...pageProps} />
      </BasketContextProvider>
  )
}

export default MyApp
