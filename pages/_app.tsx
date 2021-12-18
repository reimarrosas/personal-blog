import type { AppProps } from 'next/app';

import '../styles/globals.css';
import Container from '../components/Container';
import HeadWrapper from '../components/HeadWrapper';
import Header from '../components/Header';
import ThemeProvider, { ThemeContext } from '../components/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadWrapper />
      <ThemeProvider>
        <Container classes='container'>
          <Header />
          <Container classes='body-container'>
            <Component {...pageProps} />
          </Container>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
