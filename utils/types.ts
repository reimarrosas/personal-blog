import { ReactNode } from 'react';

export type props = {
  children?: ReactNode;
};

export enum Width {
  SM,
  MD,
  LG,
  AUTO
}
export type Pixels = `${number}px`;
