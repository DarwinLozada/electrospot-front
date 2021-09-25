import { Button, Layout, Grid, Row, Col, Input } from 'antd'
import { FC } from 'react'
import Image from 'next/image'
import electrospotLogo from '../../public/images/electrospot_logo_white.png'
import electrospotLogoMark from '../../public/images/electrospot_logo_mark.png'
import Link from 'next/link'

const { Header, Footer, Content } = Layout
const { Search } = Input
const { useBreakpoint } = Grid

const MainLayout: FC = ({ children }) => {
  const isMobile = useBreakpoint().xs

  return (
    <Layout className="overflow-hidden min-h-screen">
      <Header className="flex items-center justify-between w-screen">
        <Row align="middle" className="w-full">
          <Col span={16} className="flex items-center">
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
