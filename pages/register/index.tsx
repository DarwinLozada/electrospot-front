import { UserCredential } from '@firebase/auth'
import { Form, Input } from 'antd'
import { CONFIRM_ACCOUNT_ROUTE } from 'constants/routes'
import { signUpWithEmail } from 'firebase_services/auth'
import useAsyncAction from 'hooks/useAsyncAction'
import AuthLayout from 'layouts/AuthLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { RegisterForm } from 'types/forms'

const RegisterPage: NextPage = () => {
  const router = useRouter()

  const { callAsync, isLoading } = useAsyncAction<UserCredential>({
    onComplete: ({ user }) => {
      router.push({
        pathname: CONFIRM_ACCOUNT_ROUTE,
        query: { email: user.email },
      })
    },
  })

  const onSubmit = ({ email, password, name }: RegisterForm) => {
    callAsync(() => signUpWithEmail(email, password, name))
  }

  return (
    <AuthLayout
      title="Create Account"
      formName="register-form"
      onSubmit={onSubmit}
      isLoading={isLoading}
    >
      <Form.Item
        label="Your name"
        name="name"
        rules={[{ required: true, message: 'Please input your name' }]}
      >
        <Input />
      </Form.Item>
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
        label={<span className="">Confirm password:</span>}
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
    </AuthLayout>
  )
}

export default RegisterPage
