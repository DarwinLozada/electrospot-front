import { Button, Layout } from 'antd'
import { FC } from 'react'

const { Footer: AntdFooter } = Layout

const Footer: FC = () => {
  return (
    <AntdFooter>
      <Button>Hola buenas</Button>
      <h2 className="">Este es footer</h2>
      <p className="text-4xl xs:text-7xl">Hola</p>
    </AntdFooter>
  )
}

export default Footer
