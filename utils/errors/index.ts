import {
  isFirebaseError,
  mapFirebaseErrors,
} from 'firebase_services/constants/errorUtilities'
import { Translate } from 'next-translate'

export const createErrorMessage = (t: Translate, err: Error) => {
  return isFirebaseError(err.name)
    ? t(`errors.firebaseErrors.${mapFirebaseErrors(err)}`)
    : err.message
}
