import styles from '../styles/ThemeToggler.module.css';
import { ThemeControl } from '../utils/types';
import { themeSwitcher, themeVariantOrDefault } from '../utils/useTheme';

const getIndicatorState = (theme: string | null) => {
  const validatedTheme = themeVariantOrDefault(theme);
  return validatedTheme === 'dark' ? 'move' : '';
};

const ThemeToggler: React.FC<ThemeControl> = ({
  themeValue,
  themeDispatcher
}) => {
  const handleClick = () => {
    themeDispatcher(themeSwitcher(themeValue));
  };

  return (
    <>
      <button
        type='button'
        className={styles.togglerBackground}
        aria-label='themeToggler'
        onClick={handleClick}
      >
        <span
          className={`${styles.togglerCircle} ${
            styles[getIndicatorState(themeValue)]
          }`}
          aria-label='themeIndicator'
        ></span>
      </button>
    </>
  );
};

export default ThemeToggler;
