import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '@/redux/actions/authActions'

const NavbarComp = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <div >
    <Navbar bg="primary" expand="lg"  >
      <Container  >
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
                  Salir
                </Nav.Link>
              </div>
            ) : (
              <>
                <Link className="text-white text-decoration-none p-3 " href="/login" passHref>
                 Login
                </Link>
              
                
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComp
