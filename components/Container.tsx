import { Pixels, props, Width } from '../utils/types';

type containerProps = props & {
  classes?: string;
  size?: Width;
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

const Container: React.FC<containerProps> = ({ children, classes, size }) => {
  return (
    <div className={classes}>
      {children}
      <style jsx>{`
        div {
          max-width: ${sizeToPx(size)};
          margin-inline: auto;
        }
      `}</style>
    </div>
  );
};

export default Container;
