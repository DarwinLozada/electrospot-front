import { Typography } from 'antd'
import AuthLayout from 'layouts/AuthLayout'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

const VerifyChangePasswordPage: NextPage = () => {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <AuthLayout title={t('auth.confirmChangePassword.title')}>
      <Typography.Paragraph className="text-center">
        {`${t('messages.verification.weHaveSentAMail')} `}
        <Typography.Text className="text-brandColor600 font-medium">
          {router.query.email}
        </Typography.Text>
        {t('messages.verification.views.changePassword')}
      </Typography.Paragraph>
    </AuthLayout>
  )
}

export default VerifyChangePasswordPage
