import { UserCredential } from '@firebase/auth'
import { Form, Input, message } from 'antd'
import { PRODUCT_FEED_ROUTE } from 'constants/routes'
import { applyFirebaseActionCode, signInWithEmail } from 'firebase_services/auth'
import { notVerifiedEmail } from 'firebase_services/constants/errorMessages'
import { firebaseOobCode } from 'firebase_services/constants/firebaseVars'
import useAsyncAction from 'hooks/useAsyncAction'
import AuthLayout from 'layouts/AuthLayout'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import authStore from 'stores/authStore/auth.store'
import { LoginForm } from 'types/forms'

const LoginPage: NextPage = () => {
  const router = useRouter()

  const { t } = useTranslation('common')

  const setUser = authStore((store) => store.setUser)

  const { callAsync, isLoading } = useAsyncAction<UserCredential>({
    onComplete: ({ user }) => {
      setUser(user)
      router.push({
        pathname: PRODUCT_FEED_ROUTE,
        query: { email: user.email },
      })
    },

    onError: (error) => {
      message.error(
        error.message === notVerifiedEmail
          ? t('errors.auth.notVerifiedEmail')
          : error.message
      )
    },
  })

  useEffect(() => {
    if (router.query[firebaseOobCode]) {
      applyFirebaseActionCode(router.query[firebaseOobCode] as string)
    }
  }, [router])

  const onSubmit = ({ email, password }: LoginForm) => {
    callAsync(() => signInWithEmail(email, password))
  }

  return (
    <AuthLayout
      title={t('auth.login.title')}
      formName="login-form"
      onSubmit={onSubmit}
      isLoading={isLoading}
      submitText={t('auth.login.submit')}
    >
      <Form.Item
        label={t('auth.login.fields.email.label')}
        name="email"
        rules={[
          { required: true, message: t('auth.login.fields.email.errors.required') },
          { type: 'email', message: t('auth.login.fields.email.errors.type') },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('auth.login.fields.password.label')}
        name="password"
        rules={[
          {
            required: true,
            message: t('auth.login.fields.password.errors.required'),
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
    </AuthLayout>
  )
}

export default LoginPage
