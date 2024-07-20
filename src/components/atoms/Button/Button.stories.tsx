import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { fn } from '@storybook/test';
import { Button } from './Button.tsx';
import './Button.scss';

// type StoryProps = ComponentProps<typeof Button> & {
//   buttonText: string;
// };

type StoryProps = ComponentProps<typeof Button>;
const meta: Meta<StoryProps> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    //   type: {
    //     options: ['primary', 'secondary', 'tertiary'],
    //     control: { type: 'select' },
    //   },

    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    adornment: { control: 'text' },
  },
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<StoryProps>;
export const Buttons: Story = {
  /** Default type for button **/
  args: {
    // buttonText: 'Button',
    type: 'primary',
  },
  render: ({ ...args }) => {
    return (
      <>
        <div className='secondary_buttons'>
          <Button {...args} type='primary'>
            Primary
          </Button>
          <Button {...args} type='primary' disabled={true}>
            Primary disabled
          </Button>
          <Button {...args} type='primary' loading={true}>
            Primary loading
          </Button>
        </div>
        <div className='secondary_buttons'>
          <Button {...args} type='secondary'>
            Secondary
          </Button>
          <Button {...args} type='secondary' disabled={true}>
            Secondary disabled
          </Button>
          <Button {...args} type='secondary' loading={true}>
            Secondary loading
          </Button>
        </div>
        <div className='tertiary_buttons'>
          <Button {...args} type='tertiary'>
            Tertiary
          </Button>
          <Button {...args} type='tertiary' disabled={true}>
            Tertiary disabled
          </Button>
          <Button {...args} type='tertiary' loading={true}>
            Tertiary loading
          </Button>
        </div>
      </>
    );
  },
};
