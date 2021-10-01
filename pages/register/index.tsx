import { UserCredential } from '@firebase/auth'
import { Button, Form, Grid, Input, Typography } from 'antd'
import { signUpWithEmail } from 'firebase_services/auth'
import useAsyncAction from 'hooks/useAsyncAction'
import { NextPage } from 'next'
import Image from 'next/image'
import electrospotLogo from 'public/images/electrospot_logo_black.png'
import { RegisterForm } from 'types/forms'

const { useBreakpoint } = Grid

const RegisterPage: NextPage = () => {
  const isMobile = useBreakpoint().xs

  const { callAsync, isLoading } = useAsyncAction<UserCredential>()

  const onSubmit = ({ email, password }: RegisterForm) => {
    callAsync(() => signUpWithEmail(email, password))
  }

  return (
    <main className="flex flex-col items-center justify-center max-w-screen h-screen max-h-screen overflow-hidden">
      <div className="xs:shadow-md pt-6 px-4 xs:px-0 flex flex-col items-center justify-center">
        <div className="w-36 mb-6">
          <Image src={electrospotLogo} alt="electrospot_logo" />
        </div>
        <Typography.Title level={isMobile ? 2 : 3}>Create Account</Typography.Title>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="register-form"
          className="p-4"
          onFinish={onSubmit}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your e-mail' },
              { type: 'email', message: 'The input is not a valid e-mail' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password',
              },
              {
                min: 6,
                message: 'The password should be at least 6 characters long',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label={<span className="mr-20">Confirm password:</span>}
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: 'Please input your password confirmation',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('Passwords do not match'))
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: isMobile ? 0 : 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              block={!!isMobile}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  )
}

export default RegisterPage
