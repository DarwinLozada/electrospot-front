import { Grid, Typography } from 'antd'
import Image from 'next/image'
import electrospotLogo from 'public/images/electrospot_logo_black.png'
import { FC, ReactNode } from 'react'

const { useBreakpoint } = Grid

interface Props {
  title: ReactNode
}

const AuthLayout: FC<Props> = ({ children, title }) => {
  const isMobile = useBreakpoint().xs

  return (
    <main className="flex flex-col items-center xs:bg-gradient-to-b from-brandWhite to-brandColor100 justify-center max-w-screen h-screen max-h-screen overflow-hidden">
      <div className="xs:shadow-md bg-brandWhite pt-6 px-4 xs:px-0 flex flex-col items-center justify-center">
        <div className="w-36 mb-6">
          <Image src={electrospotLogo} alt="electrospot_logo" />
        </div>
        <Typography.Title level={isMobile ? 2 : 3}>{title}</Typography.Title>
        {children}
      </div>
    </main>
  )
}

export default AuthLayout
