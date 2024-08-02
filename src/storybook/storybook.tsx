import './storybook.scss';
import { PropsWithChildren } from 'react';

interface StorybookProps extends PropsWithChildren {
  title: string;
}

export const Storybook = ({ title, children }: StorybookProps) => {
  return (
    <div className='storybook-page'>
      <h2 className='heading'>{title}</h2>
      <div className='components-container'>{children}</div>
    </div>
  );
};
