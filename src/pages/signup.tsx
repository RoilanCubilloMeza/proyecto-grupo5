import  { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/database/config/firebase'
import {  FormGroup, Row } from 'react-bootstrap'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { setDoc, doc } from '@firebase/firestore'
import {db}  from "@/database/config/firebase"


const Signup = () => {

const [username,setusername]= useState("")
const [email,setemail]= useState("")
const [password,setpassword]= useState("")
const[loading, setLoading]= useState(false)


  const signup = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    try {
const userCredential = await  createUserWithEmailAndPassword(
  auth,email,password)
const user = userCredential.user ;
await updateProfile(user,{
  displayName: username});

  await setDoc(doc(db,"usuarios",user.uid),{
    id: user.uid,
    email:user.email,
    displayNAme:username
  }
  
  )
  setLoading(false);
  toast.success("Creacion del usuario correcto");
<Link href={"/login"}></Link>
    }
     catch (error) {
      setLoading(false);
      toast.error('Algo salio mal')
    }
  }
  return (
    <Row>
<form onSubmit={signup}>
<FormGroup>
  <input type="text" placeholder='user'value={username} 
  onChange={(e)=> setusername(e.target.value)}/>
</FormGroup>

<FormGroup>
  <input type="email" placeholder='email'value={email} 
  onChange={(e)=> setemail(e.target.value)}/>
</FormGroup>

<FormGroup>
  <input type="password" placeholder='password'value={password} 
  onChange={(e)=> setpassword(e.target.value)}/>
</FormGroup>
<button className='btn btn-primary' >Ingresar</button>
<p>¿Tienes cuenta? ingresa Aqui
<Link  className=" p-3 " href={'/login'} passHref>Iniciar Sesion </Link>
   </p>
</form>
    </Row>
  )
}

export default Signup
