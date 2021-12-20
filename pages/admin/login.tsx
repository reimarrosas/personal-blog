import { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  FormEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useState
} from 'react';

import Container from '../../components/Container';
import { LoginCredentials, Width } from '../../utils/types';
import { nilChecker } from '../../utils/nilChecker';
import { LoginContext } from '../../components/LoginProvider';

import styles from '../../styles/Admin.module.css';

const Login: NextPage<LoginCredentials> = ({ adminId, adminPw }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/admin/upload');
    }
  });

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isValid, setIsValid] = useState(true);
  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();

    const inputCredsIsValid = id === adminId && pw === adminPw;
    if (nilChecker(adminId) && nilChecker(adminPw) && inputCredsIsValid) {
      setIsLoggedIn(true);
      router.push('/admin/upload');
    } else {
      setIsValid(false);
    }
  };

  return (
    <Container center={true} size={Width.MD}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.formTitle}>Login</h1>
        <div className={styles.validationText}>
          {!isValid && <span>Data Missing or Invalid!</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='id'>Admin ID: </label>
          <input
            value={id}
            onChange={(evt: FormEvent<HTMLInputElement>) =>
              setId(evt.currentTarget.value)
            }
            type='text'
            name='id'
            id='id'
            required={true}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='pw'>Admin PW: </label>
          <input
            value={pw}
            onChange={(evt: FormEvent<HTMLInputElement>) =>
              setPw(evt.currentTarget.value)
            }
            type='password'
            name='pw'
            id='pw'
            required={true}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <input className={styles.button} type='submit' value='Login' />
        </div>
      </form>
    </Container>
  );
};

export function getStaticProps() {
  return {
    props: {
      adminId: process.env.ADMIN_ID,
      adminPw: process.env.ADMIN_PW
    }
  };
}

export default Login;
