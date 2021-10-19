import { Form, Input, message } from 'antd'
import { changePassword } from 'firebase_services/auth'
import useAsyncAction from 'hooks/useAsyncAction'
import AuthLayout from 'layouts/AuthLayout'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { ConfirmChangePasswordForm } from 'types/forms'

const ConfirmChangePasswordPage: NextPage = () => {
  const { t } = useTranslation('common')

  const router = useRouter()

  const obbCode = router.query.obbCode

  const { callAsync, isLoading } = useAsyncAction<void>({
    onComplete: () => {
      message.success(t('auth.confirmChangePassword.messages.successful'))
    },
    onError: (err) => {
      message.error(t('auth.errors.default'))
      console.error(err)
    },
  })

  const onSubmit = ({ password }: ConfirmChangePasswordForm) => {
    if (obbCode) {
      callAsync(() => changePassword(obbCode as string, password))
    } else {
      message.error(t('auth.errors.default'))
    }
  }

  return (
    <AuthLayout
      title={t('auth.confirmChangePassword.title')}
      formName="confirm-change-password-form"
      onSubmit={onSubmit}
      isLoading={isLoading}
      submitText={t('auth.confirmChangePassword.submit')}
    >
      <Form.Item
        label={t('auth.confirmChangePassword.fields.password.label')}
        name="password"
        rules={[
          {
            required: true,
            message: t('auth.confirmChangePassword.fields.password.errors.required'),
          },
          {
            min: 6,
            message: t('auth.confirmChangePassword.fields.password.errors.min'),
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label={t('auth.confirmChangePassword.fields.confirmPassword.label')}
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: t(
              'auth.confirmChangePassword.fields.confirmPassword.errors.required'
            ),
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(
                new Error(
                  t(
                    'auth.confirmChangePassword.fields.confirmPassword.errors.validator'
                  )
                )
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

export default ConfirmChangePasswordPage
