import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
import {Provider} from "react-redux"
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import store from '@/redux/store'

function MyApp({ Component, pageProps }: AppProps) {
const [isAuth, setIsAuth]= useState(false)




  return (
    <Provider store={store}>
      <Navbar/>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
