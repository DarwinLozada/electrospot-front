import { User } from '@firebase/auth'

export interface AuthStore {
  user: User | null
  setUser: (user: User | null) => void
}
