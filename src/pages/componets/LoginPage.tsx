import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const facebookProvider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();

export const signInWithFacebook = async () => {
  try {
    const result = await auth.signInWithPopup(facebookProvider);
    return result.user;
  } catch (error) {
    console.log(error);
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = new signInWithPopup(googleProvider);
    return result.user;
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};
