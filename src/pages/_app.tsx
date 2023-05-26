import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'
import { Provider } from 'react-redux'
import AuthActions from '@/redux/actions/authActions'
import { store } from '@/redux/store'

const noAuthRequired = ['/', '/login', '/signup']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  

  return (
<Provider store={(store)}>    
<AuthActions>
      <Navbar />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthActions>
    </Provider>
  )
}

export default MyApp
