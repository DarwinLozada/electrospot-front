import {
  isFirebaseError,
  mapFirebaseErrors,
} from 'firebase_services/constants/errorUtilities'
import { Translate } from 'next-translate'

/**
 * Returns an user readable error message.
 *
 * @param t The i18n translate function.
 * @param err The error object.
 * @returns An error message. If it is a Firebase related error, returns its correspondent note, if not the error's message itself.
 */
export const createErrorMessage = (t: Translate, err: Error) => {
  return isFirebaseError(err.name)
    ? t(`errors.firebaseErrors.${mapFirebaseErrors(err)}`)
    : err.message
}
