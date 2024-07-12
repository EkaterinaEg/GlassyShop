import type { HTMLAttributes } from 'react';
import React from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Type and state of the component*/
  type: 'primary' | 'secondary' | 'tertiary';
  state?: 'disabled' | 'loading';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ type, state, onClick, children }: ButtonProps) => {
  const buttonClass = classNames({
    btn_primary: type === 'primary',
    'btn_primary btn_primary_disabled': type === 'primary' && state === 'disabled',
    'btn_primary btn_primary_loading': type === 'primary' && state === 'loading',
    btn_secondary: type === 'secondary',
    'btn_secondary btn_secondary_disabled': type === 'secondary' && state === 'disabled',
    'btn_secondary btn_secondary_loading': type === 'secondary' && state === 'loading',
    btn_tertiary: type === 'tertiary',
    'btn_tertiary btn_tertiary_disabled': type === 'tertiary' && state === 'disabled',
  });
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
