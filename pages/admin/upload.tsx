import { NextPage } from 'next';
import { FormEvent, useRef, useState } from 'react';

import Container from '../../components/Container';
import { Width } from '../../utils/types';
import uploadPost from '../../utils/uploadPost';

// TODO: Add Loader
const Upload: NextPage<{ adminId?: string; adminPw?: string }> = ({
  adminId,
  adminPw
}) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isValid, setIsValid] = useState(true);
  const mdFile = useRef<HTMLInputElement>(null);

  const handleId = (evt: FormEvent<HTMLInputElement>) =>
    setId(evt.currentTarget.value);
  const handlePw = (evt: FormEvent<HTMLInputElement>) =>
    setPw(evt.currentTarget.value);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const file = mdFile.current?.files;
    const isCredsValid = id === adminId && pw === adminPw;
    const isFileValid = file !== null && file !== undefined;
    if (isCredsValid && isFileValid) {
      setIsValid(true);
      await uploadPost(file[0]);
    } else {
      setIsValid(false);
    }
  };

  return (
    <main>
      <Container center={true} size={Width.MD}>
        <form onSubmit={handleSubmit}>
          <div className='validationText'>
            {!isValid && <span>Data Inputted Invalid!</span>}
          </div>
          <div className='form-group'>
            <label htmlFor='id'>Admin ID: </label>
            <input
              value={id}
              onChange={handleId}
              type='text'
              name='id'
              id='id'
              required={true}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='pw'>Admin PW: </label>
            <input
              value={pw}
              onChange={handlePw}
              type='password'
              name='pw'
              id='pw'
              required={true}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='mdFile'>Markdown File: </label>
            <input
              ref={mdFile}
              type='file'
              name='mdFile'
              id='mdFile'
              accept='md'
              required={true}
              multiple={false}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Upload' />
          </div>
        </form>
      </Container>
    </main>
  );
};

export function getStaticProps() {
  return {
    props: { adminId: process.env.ADMIN_ID, adminPw: process.env.ADMIN_PW }
  };
}

export default Upload;
