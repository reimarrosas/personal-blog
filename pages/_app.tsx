import type { AppProps } from 'next/app';

import '../styles/globals.css';
import Container from '../components/Container';
import HeadWrapper from '../components/HeadWrapper';
import Header from '../components/Header';
import useTheme from '../utils/useTheme';
import LoginProvider from '../components/LoginProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const { themeValue, themeDispatcher } = useTheme();

  return (
    <>
      <HeadWrapper />
      <Container classes={`theme-${themeValue} container`}>
        <Header themeValue={themeValue} themeDispatcher={themeDispatcher} />
        <Container classes='body-container'>
          <LoginProvider>
            <Component {...pageProps} />
          </LoginProvider>
        </Container>
      </Container>
    </>
  );
}

export default MyApp;
