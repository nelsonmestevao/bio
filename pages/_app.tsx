import type { AppProps } from 'next/app';
import 'animate.css';
import 'normalize.css';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
