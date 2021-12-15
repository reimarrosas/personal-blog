import type { AppProps } from 'next/app';

import '../styles/globals.css';
import Container from '../components/Container';
import { getThemeClass } from '../utils/theme';
import { useState } from 'react';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(false);

  return (
    <Container classes={`${getThemeClass(isLight)} textColor container`}>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
