import { Typography } from 'antd'
import AuthLayout from 'layouts/AuthLayout'
import { NextPage } from 'next'

const SuccessFullRegistration: NextPage = () => {
  return (
    <AuthLayout title="Successful Registration!">
      <Typography>Hola</Typography>
    </AuthLayout>
  )
}

export default SuccessFullRegistration
