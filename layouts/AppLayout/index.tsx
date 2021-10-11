import { onAuthStateChanged } from 'firebase_services/auth'
import { FC } from 'react'
import authStore from 'stores/authStore/auth.store'

const AppLayout: FC = ({ children }) => {
  const setUser = authStore((store) => store.setUser)

  onAuthStateChanged((user) => {
    setUser(user)
  })

  return <>{children}</>
}

export default AppLayout
