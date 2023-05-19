import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'

const NavbarComp = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <div>
                <Nav.Link
                  onClick={() => {
                    logout()
                    router.push('/login')
                  }}
                >
                  Logout
                </Nav.Link>
              </div>
            ) : (
              <>
                <Link  className='text-white  text-decoration-none  p-1' href='/signup' passHref>
                  Inscribirse
                </Link>
                <Link  className='text-white  text-decoration-none p-1' href="/login" passHref>
                Ingresar
                </Link>
                <Link className='text-white  text-decoration-none p-1'  href="/anuncio" >
                Anuncio
                </Link>
                <Link className='text-white  text-decoration-none p-1' href="/empleado">
                Empleado
                </Link>
                <Link className='text-white  text-decoration-none p-1' href="/horario">
                Horario
                </Link>
                <Link  className='text-white  text-decoration-none p-1' href="/pantalla">
                Pantalla
                </Link>
                <Link className='text-white  text-decoration-none p-1' href="/personas">
                Personas
                </Link>
                <Link className='text-white  text-decoration-none p-1'  href="/puesto">
                Puesto
                </Link>
                <Link className='text-white  text-decoration-none p-1' href="/ruta">
                Ruta
                </Link>
                <Link  className='text-white  text-decoration-none p-1' href="/usuario">
                Usuario
                </Link>
             
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp
