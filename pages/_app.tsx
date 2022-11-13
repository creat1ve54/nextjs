import "swiper/css";
import "swiper/css/pagination";

import '../styles/globals.scss'
import '../styles/header.scss'
import '../styles/fonts.scss'
import '../styles/main.scss'
import '../styles/development.scss'
import '../styles/bitoobit.scss'
import '../styles/sites.scss'
import '../styles/stages.scss'
import '../styles/stack.scss'
import '../styles/reviews.scss'
import '../styles/team.scss'
import '../styles/form.scss'
import '../styles/footer.scss'


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
