import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged as firebaseAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth'
import app from 'firebase_services/app'
import actionCodeSettings from 'firebase_services/constants/actionCodeSettings'
import { notVerifiedEmail } from 'firebase_services/constants/errorMessages'

export const auth = getAuth(app)

/**
 * Creates an account using the email and a password provided by the user.
 *
 * After the account is created the user is logged out to only allow the login
 * if the email is verified.
 *
 * @param email - User's email.
 * @param password - User's password.
 * @param credentialName - User's display name.
 *
 * @returns Promise that returns the User's credentials
 */
export const signUpWithEmail = (
  email: string,
  password: string,
  credentialName: string
) =>
  createUserWithEmailAndPassword(auth, email, password).then(
    async (userCredential) => {
      await updateProfile(userCredential.user, {
        displayName: credentialName,
      })

      await sendEmailVerification(userCredential.user, actionCodeSettings).then(
        () => {
          signOut(auth)
        }
      )

      return userCredential
    }
  )

/**
 * Sign in using the user's email and password.
 *
 * If the user's email is not verified, the user is signed out and an error is thrown
 *
 * @param email User's email.
 * @param password User's password.
 *
 * @returns Promise that returns the User's credentials
 */
export const signInWithEmail = (
  email: string,
  password: string
): Promise<UserCredential> =>
  signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
    if (!userCredential.user.emailVerified) {
      await signOut(auth)
      throw new Error(notVerifiedEmail)
    }

    return userCredential
  })

/**
 * Get the data of the current user if it's logged in.
 *
 * @returns The user's data
 */
export const getCurrentUser = (): User | null => {
  let user = null
  firebaseAuthStateChanged(auth, (userData) => {
    if (userData) {
      user = userData
    }
  })

  return user
}

/**
 * Add a callback to execute when the state of the current user changes
 *
 * @param onChange Callback to execute
 */
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
