import { Col, Grid, Input, Layout, Row } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import electrospotLogoMark from 'public/images/electrospot_logo_mark.png'
import electrospotLogo from 'public/images/electrospot_logo_white.png'
import { FC } from 'react'
import UserMenu from '../UserMenu'

const { Search } = Input
const { Header: AntdHeader } = Layout
const { useBreakpoint } = Grid

const Header: FC = () => {
  const isMobile = useBreakpoint().xs

  return (
    <AntdHeader className="flex items-center justify-between w-screen">
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
          <UserMenu />
        </Col>
      </Row>
    </AntdHeader>
  )
}

export default Header
