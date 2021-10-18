import { filterToTranslate } from 'utils/strings'
import { firebaseErrorBaseMessage, firebaseErrors } from './errorMessages'

export const mapFirebaseErrors = (err: Error): string => {
  if (firebaseErrors.includes(err.message)) {
    return filterToTranslate(err.message)
  }

  return 'default'
}

export const isFirebaseError = (errorMessage: string) => {
  return errorMessage.includes(firebaseErrorBaseMessage)
}
