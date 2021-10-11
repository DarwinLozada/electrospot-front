import { UserCredential } from '@firebase/auth'
import { Form, Input } from 'antd'
import { PRODUCT_FEED_ROUTE } from 'constants/routes'
import { signInWithEmail } from 'firebase_services/auth'
import useAsyncAction from 'hooks/useAsyncAction'
import AuthLayout from 'layouts/AuthLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import authStore from 'stores/authStore/auth.store'
import { LoginForm } from 'types/forms'

const LoginPage: NextPage = () => {
  const router = useRouter()

  const setUser = authStore((store) => store.setUser)

  const { callAsync, isLoading } = useAsyncAction<UserCredential>({
    onComplete: ({ user }) => {
      setUser(user)
      router.push({
        pathname: PRODUCT_FEED_ROUTE,
        query: { email: user.email },
      })
    },
  })

  const onSubmit = ({ email, password }: LoginForm) => {
    callAsync(() => signInWithEmail(email, password))
  }

  return (
    <AuthLayout
      title="Login"
      formName="login-form"
      onSubmit={onSubmit}
      isLoading={isLoading}
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
    </AuthLayout>
  )
}

export default LoginPage
