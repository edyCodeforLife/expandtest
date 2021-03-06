import '../styles/globals.css';
import { AppContext } from '../context/state'

function MyApp({ Component, pageProps }) {
    return(
        <AppContext>
            <Component {...pageProps} />
        </AppContext>
    )
}

export default MyApp
