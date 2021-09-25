import { Card, Avatar, Row, Col } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'

const { Meta } = Card

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Row>
        {['w', 'w', 'w', 'w', 'w', 'w'].map((_, index) => (
          <Col key={index} span={12}>
            <Card
              className="max-w-xs"
              cover={
                <img
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  alt="product"
                />
              }
              actions={[<ShoppingCartOutlined key={index} />]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
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
