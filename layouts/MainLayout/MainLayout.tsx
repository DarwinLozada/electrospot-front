import { Button, Layout, Typography } from 'antd'
import { FC } from 'react'
import Image from 'next/image'
import electrospotLogo from '../../public/images/electrospot_logo_white.png'
import Grid from 'antd/lib/card/Grid'

const { Header, Footer, Content } = Layout

const MainLayout: FC = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Grid>
        <Image src={electrospotLogo} alt="electrospot_logo" />
        <Typography>
          Hola este es el header
        </Typography>
        </Grid>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer>
        <Button>
          Hola buenas
        </Button>
        <h2>Este es footer</h2>
      </Footer>
    </Layout>
  )
}

export default MainLayout
