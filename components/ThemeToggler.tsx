import styles from '../styles/ThemeToggler.module.css';
import { togglerProp } from '../utils/types';

const ThemeToggler: React.FC<togglerProp> = ({ isLight, setIsLight }) => {
  return (
    <>
      <label className={styles.togglerBackground} htmlFor='toggler'>
        <input
          className={`${styles.hideCheckbox} ${styles.toggler}`}
          type='checkbox'
          name='toggler'
          id='toggler'
          onChange={() => setIsLight(!isLight)}
        />
        <div className={styles.togglerCircle}></div>
      </label>
    </>
  );
};

export default ThemeToggler;
