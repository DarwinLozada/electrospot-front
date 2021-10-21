import { Button, Form, FormProps, Grid, Typography } from 'antd'
import { PRODUCT_FEED_ROUTE } from 'constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import electrospotLogo from 'public/images/electrospot_logo_black.png'
import { FC, ReactNode } from 'react'

const { useBreakpoint } = Grid

interface Props {
  title: ReactNode
  afterSubmit?: ReactNode
  submitText?: ReactNode
  formLayout?: FormProps
  formName?: string
  onSubmit?: (...args: any) => any
  isLoading?: boolean
}

const AuthLayout: FC<Props> = ({
  children,
  title,
  afterSubmit,
  formName,
  formLayout,
  onSubmit,
  isLoading,
  submitText = 'Submit',
}) => {
  const isMobile = useBreakpoint().xs

  return (
    <main className="flex flex-col items-center xs:bg-gradient-to-b from-brandWhite to-brandColor100 justify-center max-w-screen h-screen max-h-screen overflow-hidden">
      <div className="xs:shadow-md bg-brandWhite max-w-md py-6 px-8 flex flex-col items-center justify-center">
        <div className="w-36 mb-6">
          <Link href={PRODUCT_FEED_ROUTE}>
            <a>
              <Image src={electrospotLogo} alt="electrospot_logo" />
            </a>
          </Link>
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
            onFinish={onSubmit}
            {...formLayout}
          >
            {children}
            <Form.Item wrapperCol={{ offset: isMobile ? 0 : 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                loading={isLoading}
                block={!!isMobile}
              >
                {submitText}
              </Button>
              {afterSubmit}
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
