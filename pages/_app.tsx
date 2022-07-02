import { Provider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';
import store from 'app/store';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import '../styles/globals.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import type { AppProps } from 'next/app';
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </Provider>
    )
}

export default App;
