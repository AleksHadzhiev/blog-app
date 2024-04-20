import type { AppProps } from 'next/app'
import '../app/globals.css'
import RootLayout from '@/layouts/baseLayout'
import { appWithTranslation } from 'next-i18next';
import nextI18nConfig from '../../next-i18next.config'

function App({ Component, pageProps }: AppProps) {
    return <RootLayout>{<Component {...pageProps} />}</RootLayout>
}

export default appWithTranslation(App, nextI18nConfig);