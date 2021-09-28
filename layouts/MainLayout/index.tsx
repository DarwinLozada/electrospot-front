import { UserOutlined } from '@ant-design/icons'
import { Button, Col, Grid, Input, Layout, Row } from 'antd'
import Image from 'next/image'
import Link from 'next/Link'
import { FC } from 'react'
import electrospotLogoMark from '../../public/images/electrospot_logo_mark.png'
import electrospotLogo from '../../public/images/electrospot_logo_white.png'

const { Header, Footer, Content } = Layout
const { Search } = Input
const { useBreakpoint } = Grid

const MainLayout: FC = ({ children }) => {
  const isMobile = useBreakpoint().xs

  return (
    <Layout className="overflow-hidden min-h-screen">
      <Header className="flex items-center justify-between w-screen">
        <Row align="middle" className="w-full">
          <Col span={12} className="flex items-center">
            <Link href="/">
              <a className="flex h-[75%] max-w-[50px] xs:max-w-[150px]">
                <Image
                  src={isMobile ? electrospotLogoMark : electrospotLogo}
                  alt="electrospot_logo"
                />
              </a>
            </Link>
          </Col>
          <Col span={8} className="flex items-center">
            <Search enterButton />
          </Col>
          <Col span={4} className="flex items-center justify-center">
            <Button
              icon={<UserOutlined className="text-xl text-white" />}
              shape="circle"
              type="primary"
            />
          </Col>
        </Row>
      </Header>
      <Content className="flex-grow">{children}</Content>
      <Footer>
        <Button>Hola buenas</Button>
        <h2 className="">Este es footer</h2>
        <p className="text-4xl xs:text-7xl">Hola</p>
      </Footer>
    </Layout>
  )
}

export default MainLayout
