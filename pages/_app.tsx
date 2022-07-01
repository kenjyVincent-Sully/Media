import { Provider } from 'react-redux';
import store from 'app/store';
import '../styles/globals.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
