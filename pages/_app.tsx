import type { AppProps } from 'next/app';

import '../styles/globals.css';
import Container from '../components/Container';
import { Width } from '../utils/types';
import { getThemeClass } from '../utils/theme';
import { useState } from 'react';
import HeadWrapper from '../components/HeadWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(true);

  return (
    <>
      <HeadWrapper />
      <Container classes={`${getThemeClass(isLight)}`} size={Width.AUTO}>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
