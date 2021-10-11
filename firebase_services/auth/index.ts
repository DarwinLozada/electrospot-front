import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged as firebaseAuthStateChanged,
  signInWithEmailAndPassword,
  User,
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

export const getCurrentUser = (): User | null => {
  let user = null
  firebaseAuthStateChanged(auth, (userData) => {
    if (userData) {
      user = userData
    }
  })

  return user
}

export const onAuthStateChanged = (
  onChange: (user: User | null, ...args: any) => any
) => {
  try {
    firebaseAuthStateChanged(auth, (user) => {
      onChange(user)
    })
  } catch (err) {
    throw new Error(err as string)
  }
}
