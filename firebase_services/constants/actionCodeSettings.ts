import { ActionCodeSettings } from '@firebase/auth'
import { devDomain, prodDomain } from 'constants/domain'

const isDev = process.env.NODE_ENV

const currentDomain = isDev ? devDomain : prodDomain

const actionCodeSettings: ActionCodeSettings = {
  url: `http${isDev ? '' : 's'}://${currentDomain}/`,
  handleCodeInApp: true,
}

export default actionCodeSettings
