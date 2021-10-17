import { Button, Form, Grid, Typography } from 'antd'
import Image from 'next/image'
import electrospotLogo from 'public/images/electrospot_logo_black.png'
import { FC, ReactNode } from 'react'

const { useBreakpoint } = Grid

interface Props {
  title: ReactNode
  submitText: ReactNode
  formName?: string
  onSubmit?: (...args: any) => any
  isLoading?: boolean
}

const AuthLayout: FC<Props> = ({
  children,
  title,
  formName,
  onSubmit,
  isLoading,
  submitText = 'Submit',
}) => {
  const isMobile = useBreakpoint().xs

  return (
    <main className="flex flex-col items-center xs:bg-gradient-to-b from-brandWhite to-brandColor100 justify-center max-w-screen h-screen max-h-screen overflow-hidden">
      <div className="xs:shadow-md bg-brandWhite max-w-md py-6 px-8 flex flex-col items-center justify-center">
        <div className="w-36 mb-6">
          <Image src={electrospotLogo} alt="electrospot_logo" />
        </div>
        <div className="mb-4">
          <Typography.Title className="text-center" level={isMobile ? 2 : 3}>
            {title}
          </Typography.Title>
        </div>

        {onSubmit ? (
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            name={formName}
            className="p-4"
            onFinish={onSubmit}
          >
            {children}
            <Form.Item wrapperCol={{ offset: isMobile ? 0 : 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                block={!!isMobile}
              >
                {submitText}
              </Button>
            </Form.Item>
          </Form>
        ) : (
          children
        )}
      </div>
    </main>
  )
}

export default AuthLayout
