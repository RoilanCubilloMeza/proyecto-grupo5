import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000/api/usuarios'

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthActions = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar el estado de autenticación en la carga inicial
    checkAuthState()

    // ...

    // Función para verificar el estado de autenticación
    async function checkAuthState() {
      try {
        const token = localStorage.getItem('token')

        if (token) {
          // Hacer una solicitud a tu API para verificar el token y obtener los datos del usuario
          const response = await axios.get(`${API_BASE_URL}/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          const userData = response.data

          setUser(userData)
        }
      } catch (error) {
        console.log('Error verifying authentication state:', error)
      } finally {
        setLoading(false)
      }
    }
  }, [])

  const signup = async (email: string, password: string) => {
    try {
      // Hacer una solicitud a tu API para registrar al usuario
      const response = await axios.post(`${API_BASE_URL}/signup`, {
        email,
        password,
      })

      const userData = response.data

      setUser(userData)

      // Guardar el token en el almacenamiento local
      localStorage.setItem('token', userData.token)
    } catch (error) {
      console.log('Error signing up:', error)
      throw error
    }
  }

  const login = async (email: string, password: string) => {
    try {
      // Hacer una solicitud a tu API para iniciar sesión con las credenciales proporcionadas
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      })

      const userData = response.data

      setUser(userData)

      // Guardar el token en el almacenamiento local
      localStorage.setItem('token', userData.token)
    } catch (error) {
      console.log('Error logging in:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      // Hacer una solicitud a tu API para cerrar sesión
      await axios.post(`${API_BASE_URL}/logout`)

      setUser(null)

      // Eliminar el token del almacenamiento local
      localStorage.removeItem('token')
    } catch (error) {
      console.log('Error logging out:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}

export default AuthActions
