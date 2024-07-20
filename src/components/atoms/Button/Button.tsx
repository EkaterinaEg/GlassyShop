import type { HTMLAttributes } from 'react';
import classNames from 'classnames';
import React from 'react';

import './Button.scss';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Type of the component */
  type: 'primary' | 'secondary' | 'tertiary';
  /** state loading or not */
  loading?: boolean;
  disabled?: boolean;
  /** Adornment is displayed at the end of the button */
  adornment?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ type, onClick, children, disabled, adornment }: ButtonProps) => {
  const buttonClass = classNames('btn', `btn_${type}`);
  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
      {adornment && <span className='btn__adornment'>{adornment}</span>}
    </button>
  );
};
