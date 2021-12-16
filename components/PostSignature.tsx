import styles from '../styles/PostSignature.module.css';
import { props } from '../utils/types';

type PSProps = props & {
  title?: string;
  date?: string;
  description?: string;
};

const PostSignature: React.FC<PSProps> = ({ title, date, description }) => {
  return (
    <article className={styles.postSignature}>
      <h1 className={styles.title}>{title ?? 'Lorem Ipsum Dolor est'}</h1>
      <small className={styles.date}>{date ?? '15 December 2021'}</small>
      <p className={styles.description}>
        {description ??
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis gravida blandit. Sed porttitor pulvinar velit, nec aliquet ex consequat ut. In hac habitasse platea.'}
      </p>
    </article>
  );
};

export default PostSignature;
