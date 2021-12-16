import { Context, createContext, useState } from 'react';
import type { LoginContextType, props } from '../utils/types';

export let LoginContext: Context<LoginContextType>;

const LoginProvider: React.FC<props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  LoginContext = createContext<LoginContextType>({
    isLoggedIn: false,
    setIsLoggedIn: (b: boolean) => {}
  });

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
