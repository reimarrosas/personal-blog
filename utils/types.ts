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

export type LoginContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (b: boolean) => void;
};
