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
import '../styles/working.scss'
import '../styles/mobile.scss'
import '../styles/applications.scss'
import '../styles/price.scss'
import '../styles/phase.scss'
import '../styles/services.scss'
import '../styles/finished.scss'


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
