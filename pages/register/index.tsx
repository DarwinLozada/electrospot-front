import { UserCredential } from '@firebase/auth'
import { Form, Input, message } from 'antd'
import { CONFIRM_ACCOUNT_ROUTE } from 'constants/routes'
import { signUpWithEmail } from 'firebase_services/auth'
import useAsyncAction from 'hooks/useAsyncAction'
import AuthLayout from 'layouts/AuthLayout'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { RegisterForm } from 'types/forms'
import { createErrorMessage } from 'utils/errors'

const RegisterPage: NextPage = () => {
  const router = useRouter()

  const { t } = useTranslation('common')

  const { callAsync, isLoading } = useAsyncAction<UserCredential>({
    onComplete: ({ user }) => {
      router.push({
        pathname: CONFIRM_ACCOUNT_ROUTE,
        query: { email: user.email },
      })
    },

    onError: (err) => {
      message.error(createErrorMessage(t, err))
      console.error(err)
    },
  })

  const onSubmit = ({ email, password, name }: RegisterForm) => {
    callAsync(() => signUpWithEmail(email, password, name))
  }

  return (
    <AuthLayout
      title={t('auth.register.title')}
      formName="register-form"
      onSubmit={onSubmit}
      submitText={t('auth.register.submit')}
      isLoading={isLoading}
    >
      <Form.Item
        label={t('auth.register.fields.name.label')}
        name="name"
        rules={[{ required: true, message: 'Please input your name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('auth.register.fields.email.label')}
        name="email"
        rules={[
          { required: true, message: 'Please input your e-mail' },
          { type: 'email', message: 'The input is not a valid e-mail' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={t('auth.register.fields.password.label')}
        name="password"
        rules={[
          {
            required: true,
            message: t('auth.register.fields.password.errors.required'),
          },
          {
            min: 6,
            message: t('auth.register.fields.password.errors.min'),
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label={
          <span className="">{t('auth.register.fields.confirmPassword.label')}</span>
        }
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: t('auth.register.fields.confirmPassword.errors.required'),
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(
                new Error(t('auth.register.fields.confirmPassword.errors.validator'))
              )
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
