import { Dispatch, ReactNode, SetStateAction } from 'react';

export type props = {
  children?: ReactNode;
};

export type togglerProp = {
  isLight: boolean;
  setIsLight: Dispatch<SetStateAction<boolean>>;
};

export enum Width {
  SM,
  MD,
  LG,
  AUTO
}
export type Pixels = `${number}px`;

export type PostSignatureType = {
  id: number;
  updated_at: string;
  title: string;
  description: string;
};

export type ThemeVariant = 'light' | 'dark';

export type ThemeControl = {
  themeValue: ThemeVariant;
  themeDispatcher: (t: ThemeVariant) => void;
};

export type frontMatter = {
  title: string;
  description: string;
};

export type LoginContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (b: boolean) => void;
};

export type LoginCredentials = {
  adminId?: string;
  adminPw?: string;
};
