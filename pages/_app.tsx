import AppLayout from 'layouts/AppLayout'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
export default MyApp
