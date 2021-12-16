import { useContext } from 'react';
import { getThemeClass } from '../utils/theme';

import { Pixels, props, Width } from '../utils/types';
import { ThemeContext } from './ThemeProvider';

type containerProps = props & {
  classes?: string;
  size?: Width;
  center?: boolean;
};

const sizeToPx = (w?: Width): Pixels | '100%' => {
  switch (w) {
    case Width.SM:
      return '576px';
    case Width.MD:
      return '768px';
    case Width.LG:
      return '968px';
    default:
      return '100%';
  }
};

const Container: React.FC<containerProps> = ({
  children,
  classes,
  size,
  center
}) => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div className={`${getThemeClass(isLight)} ${classes}`}>
      {children}
      <style jsx>{`
        div {
          max-width: ${sizeToPx(size)};
          ${center ? 'margin-inline: auto;' : ''}
        }
      `}</style>
    </div>
  );
};

export default Container;
