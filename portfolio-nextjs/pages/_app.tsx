import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/navbar.component'
import "../styles/style.module.css"

export default function App({Component, pageProps }: AppProps) {
    return <>
    <Navbar/>
    <Component {...pageProps} />
    </>
}