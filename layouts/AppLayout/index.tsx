import 'antd/dist/antd.css'
import { onAuthStateChanged } from 'firebase_services/auth'
import Head from 'next/head'
import { FC } from 'react'
import authStore from 'stores/authStore/auth.store'

const AppLayout: FC = ({ children }) => {
  const setUser = authStore((store) => store.setUser)

  onAuthStateChanged((user) => {
    setUser(user)
  })

  return (
    <>
      <Head>
        <title>ElectroSpot</title>
        <link rel="" />
      </Head>
      {children}
    </>
  )
}

export default AppLayout
