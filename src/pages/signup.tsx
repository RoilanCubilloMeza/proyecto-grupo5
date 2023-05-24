import { useState, SyntheticEvent } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/database/config/firebase';
import { FormGroup, Row } from 'react-bootstrap';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { setDoc, doc } from '@firebase/firestore';
import { db } from '@/database/config/firebase';

const Signup = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const signup = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: username,
      });

      await setDoc(doc(db, 'usuario', user.uid), {
        id: user.uid,
        email: user.email,
        displayName: username,
      });

      setLoading(false);
      toast.success('Creación del usuario correcta');
      <Link href={'/login'} />;
    } catch (error) {
      setLoading(false);
      toast.error('Algo salió mal');
    }
  };

  return (
    
    <Row  style={{
      width: '40%',
      margin: 'auto',
    }}className=' align-content-center p-5 form-group'>
      <form className=" text-center " onSubmit={signup}><h1>
        Crear usuario
      </h1>
        <FormGroup>
          <input className="form-control mb-3" type="text" placeholder='Nombre de usuario' value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <input className="form-control mb-3" type="email" placeholder='Correo del usuario' value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>

        <FormGroup>
          <input
            className="form-control mb-3" type="password" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <button className='btn btn-primary'>Ingresar</button>
        <p>
          ¿Tienes cuenta? ingresa Aqui
          <Link className=' p-3 ' href={'/login'} passHref>
            Iniciar Sesión
          </Link>
        </p>
      </form>
    </Row>
  );
};

export default Signup;

