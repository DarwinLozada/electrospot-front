import { UserCredential } from '@firebase/auth'
import { Button, Form, Grid, Input } from 'antd'
import { CONFIRM_ACCOUNT_ROUTE } from 'constants/routes'
import { signUpWithEmail } from 'firebase_services/auth'
import useAsyncAction from 'hooks/useAsyncAction'
import AuthLayout from 'layouts/AuthLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { RegisterForm } from 'types/forms'

const { useBreakpoint } = Grid

const RegisterPage: NextPage = () => {
  const isMobile = useBreakpoint().xs

  const router = useRouter()

  const { callAsync, isLoading } = useAsyncAction<UserCredential>({
    onComplete: ({ user }) => {
      router.push({
        pathname: CONFIRM_ACCOUNT_ROUTE,
        query: { email: user.email },
      })
    },
  })

  const onSubmit = ({ email, password }: RegisterForm) => {
    callAsync(() => signUpWithEmail(email, password))
  }

  return (
    <AuthLayout title="Create Account">
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
    </AuthLayout>
  )
}

export default RegisterPage
