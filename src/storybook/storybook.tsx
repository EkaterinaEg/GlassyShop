// import type { HTMLAttributes } from 'react';
// import classNames from 'classnames';
import React from 'react';
import './storybook.scss';

interface StorybookProps {
  children: React.ReactNode;
  title: string;
}

export const Storybook = ({ children, title }: StorybookProps) => {
  return (
    <div className='storybook-page'>
      <h2 className='heading'>{title}</h2>
      <div className='components-container'>{children}</div>
    </div>
  );
};
