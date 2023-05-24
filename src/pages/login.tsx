import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '@/redux/actions/authActions'
import Link from 'next/link'


const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/Dashboard ')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div 
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="  text-center my-3 ">Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo del usuario</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="correo"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Contraseña"
          />
        </Form.Group>
        <Button variant="primary" type="submit">Ingresar</Button>
        <p className=''>¿no tienes cuenta? ingresa aqui  <Link href="/signup">
                  Registrar
                </Link>
                </p>
      </Form>
    </div>
  )
}

export default Login
