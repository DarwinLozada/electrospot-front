import { Button, Typography } from 'antd'
import AuthLayout from 'layouts/AuthLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const SuccessFullRegistration: NextPage = () => {
  const router = useRouter()
  console.log(router.query)

  return (
    <AuthLayout title="Confirm your account">
      <Typography.Paragraph className="text-center">
        We have sent a mail to{' '}
        <Typography.Text className="text-brandColor600 font-medium">
          {router.query.email}
        </Typography.Text>
        , please check it out so you can confirm your account
      </Typography.Paragraph>
      <Button>Go to login</Button>
    </AuthLayout>
  )
}

export default SuccessFullRegistration
