import { SearchProvider } from '../context/SearchContext';
import "swiper/css";
import "swiper/css/navigation";
import 'react-dropdown/style.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <SearchProvider>
            <Component {...pageProps} />
        </SearchProvider>
    )
}

export default App;
