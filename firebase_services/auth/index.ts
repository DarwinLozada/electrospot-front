import {
  getAuth,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'
import app from 'firebase_services/app'

export const auth = getAuth(app)

export const signUpWithEmail = (
  email: string,
  password: string
): Promise<UserCredential> =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential)
    .catch((err) => err)

