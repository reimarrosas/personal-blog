import type { AppProps } from 'next/app';

import '../styles/globals.css';
import Container from '../components/Container';
import { getThemeClass } from '../utils/theme';
import { useState } from 'react';
import HeadWrapper from '../components/HeadWrapper';
import Header from '../components/Header';
import LoginProvider from '../components/LoginProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(false);

  return (
    <>
      <HeadWrapper />
      <Container classes={`${getThemeClass(isLight)} container`}>
        <LoginProvider>
          <Header isLight={isLight} setIsLight={setIsLight} />
          <Component {...pageProps} />
        </LoginProvider>
      </Container>
    </>
  );
}

export default MyApp;
