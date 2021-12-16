import type { AppProps } from 'next/app';

import '../styles/globals.css';
import Container from '../components/Container';
import HeadWrapper from '../components/HeadWrapper';
import Header from '../components/Header';
import LoginProvider from '../components/LoginProvider';
import ThemeProvider, { ThemeContext } from '../components/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadWrapper />
      <ThemeProvider>
        <Container classes='container'>
          <Header />
          <LoginProvider>
            <Component {...pageProps} />
          </LoginProvider>
        </Container>
        ;
      </ThemeProvider>
    </>
  );
}

export default MyApp;
