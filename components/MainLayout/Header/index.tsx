import { UserOutlined } from '@ant-design/icons'
import { Button, Col, Dropdown, Grid, Input, Layout, Menu, Row } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import electrospotLogoMark from 'public/images/electrospot_logo_mark.png'
import electrospotLogo from 'public/images/electrospot_logo_white.png'
import { FC } from 'react'

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
          <Dropdown
            placement="bottomCenter"
            overlay={
              <Menu>
                <Menu.Item key="0">Hola</Menu.Item>
                <Menu.Item key="1">Buenas tardes </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
              </Menu>
            }
            trigger={['click']}
          >
            <Button
              icon={<UserOutlined className="text-xl text-white" />}
              shape="circle"
              type="primary"
            />
          </Dropdown>
        </Col>
      </Row>
    </AntdHeader>
  )
}

export default Header
