import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '../styles/theme.less'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
