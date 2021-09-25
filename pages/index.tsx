import { Typography, Row, Col } from 'antd'
import { Card, CardMeta } from '@components'
import { ShoppingCartOutlined } from '@ant-design/icons'
import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'

const { Title } = Typography

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Row align="middle" gutter={[20, 40]} className="mx-8 md:mx-16">
        {['w', 'w', 'w', 'w', 'w', 'w', 'w', '', '', ''].map((_, index) => (
          <Col key={index} xs={12} sm={8} md={6}>
            <Card
              cardType="product"
              cover={
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  alt="product"
                />
              }
              actions={[<ShoppingCartOutlined key={index} />]}
            >
              <CardMeta
                title={<Title level={4}>U$S 32</Title>}
                description="This is the description"
              />
            </Card>
          </Col>
        ))}
      </Row>
    </MainLayout>
  )
}

export default Home
