import './Preloader.scss';
import cx from 'classnames';
import { HTMLAttributes } from 'react';

interface IPreloader extends HTMLAttributes<HTMLDivElement> {
  size?: 'small';
}

export const Preloader = ({ size = 'small', ...props }: IPreloader) => {
  return (
    <div {...props} className={cx(`preloader-wrapper`, props.className)}>
      <div className={cx(`ring_${size}`)} />
    </div>
  );
};
