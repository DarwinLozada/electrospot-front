import { AuthStore } from 'types/stores/authStore/authStore.types'
import create from 'zustand'
import { persist } from 'zustand/middleware'

const authStore = create<AuthStore>(
  persist(
    (set, get) => ({
      name: '',
      setName: (name) => {
        set({ name })
      },
      email: '',
      setEmail: (email) => {
        set({ email })
      },
    }),
    {
      name: 'authStorage',
    }
  )
)

export default authStore
