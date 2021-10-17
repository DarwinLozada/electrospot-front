import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged as firebaseAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth'
import app from 'firebase_services/app'
import actionCodeSettings from 'firebase_services/constants/actionCodeSettings'

export const auth = getAuth(app)

export const signUpWithEmail: (
  email: string,
  password: string,
  credentialName: string
) => Promise<UserCredential> = (email, password, credentialName) =>
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    updateProfile(userCredential.user, {
      displayName: credentialName,
    }).then(() => {
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
    })

    return userCredential
  })

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
