import { Provider } from 'react-redux';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SearchProvider } from '../context/SearchContext';
import store from 'app/store';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import "swiper/css";
import "swiper/css/navigation";
import 'react-dropdown/style.css';
import '../styles/globals.css';

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
