import { Form, Input } from 'antd'
import AuthLayout from 'layouts/AuthLayout'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { ConfirmChangePasswordForm } from 'types/forms'

const ConfirmChangePasswordPage: NextPage = () => {
  const { t } = useTranslation('common')

  const onSubmit = ({ password }: ConfirmChangePasswordForm) => {
    console.log(password)
  }

  return (
    <AuthLayout
      title={t('auth.confirmChangePassword.title')}
      formName="confirm-change-password-form"
      onSubmit={onSubmit}
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
