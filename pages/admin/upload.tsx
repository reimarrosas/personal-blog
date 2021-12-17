import { FormEvent, MutableRefObject, useRef, useState } from 'react';
import Container from '../../components/Container';
import { Width } from '../../utils/types';

const Upload: React.FC = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const mdFile = useRef<HTMLInputElement>(null);

  const handleId = (evt: FormEvent<HTMLInputElement>) =>
    setId(evt.currentTarget.value);
  const handlePw = (evt: FormEvent<HTMLInputElement>) =>
    setPw(evt.currentTarget.value);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(id, pw, mdFile.current?.files);
  };

  return (
    <main>
      <Container center={true} size={Width.MD}>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='id'>Admin ID: </label>
            <input
              value={id}
              onChange={handleId}
              type='text'
              name='id'
              id='id'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='pw'>Admin PW: </label>
            <input
              value={pw}
              onChange={handlePw}
              type='text'
              name='pw'
              id='pw'
              required
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
              required
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

export default Upload;
