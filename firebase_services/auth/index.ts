import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'
import app from 'firebase_services/app'

export const auth = getAuth(app)

export const signUpWithEmail: (
  email: string,
  password: string
) => Promise<UserCredential> = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => userCredential
  )

export const signInWithEmail = (
  email: string,
  password: string
): Promise<UserCredential> =>
  signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => userCredential
  )
