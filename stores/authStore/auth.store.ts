import { getCurrentUser } from 'firebase_services/auth'
import { AuthStore } from 'types/stores/authStore/authStore.types'
import create from 'zustand'

const authStore = create<AuthStore>((set) => ({
  user: getCurrentUser(),
  setUser: (user) => {
    set({ user })
  },
}))

export default authStore
