import { useContext, useState } from 'react';

import styles from '../styles/ThemeToggler.module.css';
import { ThemeContext } from './ThemeProvider';

const ThemeToggler: React.FC = () => {
  const { isLight, setIsLight, isChecked, setIsChecked } =
    useContext(ThemeContext);

  const [checked, setChecked] = useState(isChecked);

  return (
    <>
      <label className={styles.togglerBackground} htmlFor='toggler'>
        <input
          className={`${styles.hideCheckbox} ${styles.toggler}`}
          type='checkbox'
          name='toggler'
          id='toggler'
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <div
          className={styles.togglerCircle}
          onTransitionEnd={() => {
            setIsChecked(checked);
            setIsLight(!isLight);
          }}
        ></div>
      </label>
    </>
  );
};

export default ThemeToggler;
