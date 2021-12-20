import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useEffect, useRef, useState } from 'react';

import Container from '../../components/Container';
import { Width } from '../../utils/types';
import uploadPost from '../../utils/uploadPost';
import { nilChecker } from '../../utils/nilChecker';
import { LoginContext } from '../../components/LoginProvider';

import styles from '../../styles/Admin.module.css';

const Upload: NextPage = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(LoginContext);

  const [fileName, setFile] = useState('Choose File...');
  const mdFile = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/admin/login');
    }
  }, []);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const files = mdFile.current?.files;
    if (nilChecker(files) && nilChecker(files![0])) {
      await uploadPost(files![0]);
    }
  };

  const handleFileChange = (evt: FormEvent<HTMLInputElement>) => {
    if (evt.currentTarget?.files) {
      setFile(evt.currentTarget.files[0].name);
    }
  };

  return (
    <main>
      <Container center={true} size={Width.SM}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.formTitle}>File Upload</h1>
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
                required={true}
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

export default Upload;
