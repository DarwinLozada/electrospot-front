import { emailActionsModesRoutes, PRODUCT_FEED_ROUTE } from 'constants/routes'
import emailActionsModes from 'firebase_services/constants/emailActionModes'
import { GetServerSideProps, NextPage } from 'next'

const AuthResolverPage: NextPage = () => {
  return <></>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context

  console.log(query)

  if (query && typeof query.mode === 'string' && query.mode in emailActionsModes) {
    return {
      redirect: {
        permanent: false,
        destination:
          emailActionsModesRoutes[
            query.mode as keyof typeof emailActionsModesRoutes
          ],
      },
    }
  }

  return {
    redirect: {
      permanent: false,
      destination: PRODUCT_FEED_ROUTE,
    },
  }
}

export default AuthResolverPage
