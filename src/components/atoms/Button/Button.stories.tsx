import { Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button.tsx';
import './Button.scss';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

export const Demo = () => {
  return (
    <>
      <div className='secondary_buttons'>
        <Button type='primary'>Primary</Button>
        <Button type='primary' disabled>
          Primary disabled
        </Button>
        <Button type='primary' loading>
          Primary loading
        </Button>
      </div>
      <div className='secondary_buttons'>
        <Button type='secondary'>Secondary</Button>
        <Button type='secondary' disabled>
          Secondary disabled
        </Button>
        <Button type='secondary' loading>
          Secondary loading
        </Button>
      </div>
      <div className='tertiary_buttons'>
        <Button type='tertiary'>Tertiary</Button>
        <Button type='tertiary' disabled>
          Tertiary disabled
        </Button>
        <Button type='tertiary' loading>
          Tertiary loading
        </Button>
      </div>
    </>
  );
};

export const Playground = ({
  text,
  ...args
}: ButtonProps & {
  text: string;
}) => {
  console.log(args);
  return <Button {...args}>{text}</Button>;
};
Playground.argTypes = {
  text: { control: 'text', defaultValue: 'Button' },
  type: { control: 'inline-radio', options: ['primary', 'secondary', 'tertiary'], defaultValue: 'primary' },
  disabled: { control: 'boolean', defaultValue: false },
  loading: { control: 'boolean', defaultValue: false },
};
