import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '@/redux/actions/authActions'

const NavbarComp = () => {



  const router = useRouter();

  const handleLogout = () => {
    // Lógica para cerrar sesión
    router.push('/login');
  };

  return (
    <Navbar className='bg-primary container-fluid  '>
      <nav className="navbar text-center navbar-expand-lg">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <Link  className="text-white text-decoration-none p-3 " href={'/'} passHref>Inicio</Link>
              <Link  className="text-white text-decoration-none p-3 " href={'/login'} passHref>Login</Link>
              <Link  className="text-white text-decoration-none p-3 " href={'/signup'} passHref>Registarse</Link>
            </ul>
          </div>
      </nav>
    </Navbar>
  );
};




export default NavbarComp
