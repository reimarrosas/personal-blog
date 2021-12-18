import { Width } from '../utils/types';
import Container from './Container';
import ThemeToggler from './ThemeToggler';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.pageHeader}>
      <Container center={true} classes={styles.container} size={Width.LG}>
        <Container>
          <Link href='/'>
            <a>
              <h1
                className={`${styles['headerText-margin']} ${styles.pageTitle}`}
              >
                Autodidactics
              </h1>
            </a>
          </Link>
          <h2
            className={`${styles['headerText-margin']} ${styles.pageSubtitle}`}
          >
            A Personal Blog by Reimar Rosas
          </h2>
        </Container>
        <Container>
          <ThemeToggler />
        </Container>
      </Container>
    </header>
  );
};

export default Header;
