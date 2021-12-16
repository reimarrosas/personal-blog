import { Context, createContext, useState } from 'react';
import type { ThemeContextType, props } from '../utils/types';

export let ThemeContext: Context<ThemeContextType>;

const ThemeProvider: React.FC<props> = ({ children }) => {
  const [isLight, setIsLight] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  ThemeContext = createContext<ThemeContextType>({
    isLight: false,
    setIsLight: (b: boolean) => {},
    isChecked: false,
    setIsChecked: (b: boolean) => {}
  });

  return (
    <ThemeContext.Provider
      value={{ isLight, setIsLight, isChecked, setIsChecked }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
