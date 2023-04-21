import { auth } from './firebase/firebase'
import {signInWithPopup, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth"

import {useAuthState} from "react-firebase-hooks/auth"
import { useEffect } from "react"


export default function Home() {
  const [user,setuser]= useAuthState(auth);

  const googleAuth= new GoogleAuthProvider();
  const facebookAuth= new FacebookAuthProvider();

const login = async()=>{
const result = await signInWithPopup(auth,googleAuth);
}
const loginface = async()=>{
  const result = await signInWithPopup(auth,facebookAuth);}

useEffect(() => {
  console.log(user)
},[user]);

  return (
 <div>

  <h1>
    LOGIN
  </h1>
  <button onClick={login}>GOOGLE</button>
  <button onClick={loginface}>FACEBOOK</button>

 </div>
 
 
  )
}


