import { Header } from '@/components/Header'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import '../styles/slider.css'

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  const isHome = asPath === '/'

  return (
    <>
      <Header isHome={isHome} />
      <Component {...pageProps} />
    </>
  )
}
