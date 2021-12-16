import { Width } from '../utils/types';
import Container from './Container';
import ThemeToggler from './ThemeToggler';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.pageHeader}>
      {console.log(styles.pageHeader)}
      <Container classes={styles.container} size={Width.LG}>
        <Container>
          <h1 className={`${styles['headerText-margin']} ${styles.pageTitle}`}>
            Autodidactics
          </h1>
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
