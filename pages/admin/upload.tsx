import { NextPage } from 'next';
import { FormEvent, useRef, useState } from 'react';

import Container from '../../components/Container';
import { Width } from '../../utils/types';
import uploadPost from '../../utils/uploadPost';
import styles from '../../styles/Upload.module.css';
import { nilChecker } from '../../utils/nilChecker';

// TODO: Add Loader
const Upload: NextPage<{ adminId?: string; adminPw?: string }> = ({
  adminId,
  adminPw
}) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [fileName, setFile] = useState('Choose File...');
  const mdFile = useRef<HTMLInputElement>(null);

  const handleId = (evt: FormEvent<HTMLInputElement>) =>
    setId(evt.currentTarget.value);
  const handlePw = (evt: FormEvent<HTMLInputElement>) =>
    setPw(evt.currentTarget.value);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const files = mdFile.current?.files;
    if (nilChecker(files) && nilChecker(id) && nilChecker(files![0])) {
      setIsValid(true);
      await uploadPost(files![0]);
    } else {
      setIsValid(false);
    }
  };

  const handleFileChange = (evt: FormEvent<HTMLInputElement>) => {
    if (evt.currentTarget?.files) {
      setFile(evt.currentTarget.files[0].name);
    }
  };

  return (
    <main>
      <Container center={true} size={Width.MD}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.validationText}>
            {!isValid && <span>Data Missing or Invalid!</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='id'>Admin ID: </label>
            <input
              value={id}
              onChange={handleId}
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
              onChange={handlePw}
              type='password'
              name='pw'
              id='pw'
              required={true}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.fileLabel} htmlFor='mdFile'>
              <input
                type='file'
                name='mdFile'
                id='mdFile'
                accept='md'
                ref={mdFile}
                onChange={handleFileChange}
                className={styles.fileInput}
              />
              <div className={styles.formFileInput}>
                <span className={styles.fileName}>{fileName}</span>
                <span className={styles.browseButton} role='button'>
                  Browse
                </span>
              </div>
            </label>
          </div>
          <div className={styles.formGroup}>
            <input className={styles.button} type='submit' value='Upload' />
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
