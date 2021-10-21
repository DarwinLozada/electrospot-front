import { Button, Typography } from 'antd'
import { LOGIN_ROUTE } from 'constants/routes'
import AuthLayout from 'layouts/AuthLayout'
import { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

const VerifyEmailPage: NextPage = () => {
  const { t } = useTranslation('common')

  const router = useRouter()

  const handleClick = () => {
    router.push(LOGIN_ROUTE)
  }

  return (
    <AuthLayout title="Confirm your account">
      <Typography.Paragraph className="text-center">
        {`${t('messages.verification.weHaveSentAMail')} `}
        <Typography.Text className="text-brandColor600 font-medium">
          {router.query.email}
        </Typography.Text>
        {t('messages.verification.views.confirmAccount')}
      </Typography.Paragraph>
      <Button onClick={handleClick}>{t('CTA.goToLogin')}</Button>
    </AuthLayout>
  )
}

export default VerifyEmailPage
