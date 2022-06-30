import '../styles/globals.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
