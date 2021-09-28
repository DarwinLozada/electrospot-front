import { Layout } from 'antd'
import Footer from 'components/MainLayout/Footer'
import Header from 'components/MainLayout/Header'
import { FC } from 'react'

const { Content } = Layout

const MainLayout: FC = ({ children }) => {
  return (
    <Layout className="overflow-hidden min-h-screen">
      <Header />
      <Content className="flex-grow">{children}</Content>
      <Footer />
    </Layout>
  )
}

export default MainLayout
