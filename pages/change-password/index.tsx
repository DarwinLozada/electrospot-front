import { Form, Input, message, Typography } from 'antd'
import { sendChangePasswordEmail } from 'firebase_services/auth'
import useAsyncAction from 'hooks/useAsyncAction'
import AuthLayout from 'layouts/AuthLayout'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { SendChangePasswordEmailForm } from 'types/forms'
import { createErrorMessage } from 'utils/errors'

const SendChangePasswordEmail: NextPage = () => {
  const { t } = useTranslation('common')

  const { callAsync, isLoading } = useAsyncAction<void>({
    onError: (err) => {
      message.error(createErrorMessage(t, err))
    },
  })

  const onSubmit = ({ email }: SendChangePasswordEmailForm) => {
    callAsync(() => sendChangePasswordEmail(email))
  }

  return (
    <AuthLayout
      title={t('auth.sendChangePasswordEmail.title')}
      formName="change_password-form"
      onSubmit={onSubmit}
      isLoading={isLoading}
      formLayout={{
        wrapperCol: {
          span: 18,
        },
        labelCol: {
          span: 6,
        },
      }}
    >
      <Form.Item
        label={t('auth.sendChangePasswordEmail.fields.email.label')}
        name="email"
        rules={[
          {
            required: true,
            message: t('auth.sendChangePasswordEmail.fields.email.errors.required'),
          },
          {
            type: 'email',
            message: t('auth.sendChangePasswordEmail.fields.email.errors.type'),
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Typography.Paragraph className="pl-2 pb-2" type="secondary">
        {t('auth.sendChangePasswordEmail.extra.emailInfo')}
      </Typography.Paragraph>
    </AuthLayout>
  )
}

export default SendChangePasswordEmail
