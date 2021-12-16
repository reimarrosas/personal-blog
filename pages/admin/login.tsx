import { GetStaticPropsResult, NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  FormEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useState
} from 'react';
import Container from '../../components/Container';
import { LoginContext } from '../../components/LoginProvider';
import { Width } from '../../utils/types';

// TODO: Move the validation to an API endpoint
const Login: NextPage<LoginProps> = ({ ADMIN_ID, ADMIN_PW }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push('/admin/upload');
  }, [isLoggedIn]);

  const [id, setId] = useState('');
  const [pw, setPassword] = useState('');
  const [isCredsValid, setIsCredsValid] = useState(true);

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log(ADMIN_ID, ADMIN_PW);
    if (id === ADMIN_ID && pw === ADMIN_PW) {
      setIsCredsValid(true);
      setIsLoggedIn(true);
    } else {
      setIsCredsValid(false);
    }
  };

  return (
    <main>
      <Container center={true} size={Width.MD}>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            {!isCredsValid && (
              <span className='validationText'>ID or Password Invalid!</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='id'>Admin ID: </label>
            <input
              type='text'
              name='id'
              id='id'
              placeholder='Admin ID...'
              required={true}
              value={id}
              onChange={(evt: FormEvent<HTMLInputElement>) =>
                setId(evt.currentTarget.value)
              }
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Admin Password...'
              required={true}
              value={pw}
              onChange={(evt: FormEvent<HTMLInputElement>) =>
                setPassword(evt.currentTarget.value)
              }
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Log In' />
          </div>
        </form>
      </Container>
    </main>
  );
};

type LoginProps = {
  ADMIN_ID?: string;
  ADMIN_PW?: string;
};

export function getStaticProps(): GetStaticPropsResult<LoginProps> {
  return {
    props: { ADMIN_ID: process.env.ADMIN_ID, ADMIN_PW: process.env.ADMIN_PW }
  };
}

export default Login;
