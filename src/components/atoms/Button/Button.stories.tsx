import { Preloader } from '../Preloader/Preloader';
import { Button, ButtonProps } from './Button.tsx';
import { Storybook } from '../../../storybook/storybook.tsx';
import './Button.scss';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Demo = () => {
  return (
    <Storybook title='Buttons'>
      <div className='buttons-container primary_buttons'>
        <Button type='primary'>Primary</Button>
        <Button type='primary' disabled>
          Primary disabled
        </Button>
        <Button type='primary' loading adornment={<Preloader />}>
          Primary loading
        </Button>
      </div>
      <div className='buttons-container secondary_buttons'>
        <Button type='secondary'>Secondary</Button>
        <Button type='secondary' disabled>
          Secondary disabled
        </Button>
        <Button type='secondary' loading adornment={<Preloader />}>
          Secondary loading
        </Button>
      </div>
      <div className='buttons-container tertiary_buttons'>
        <Button type='tertiary'>Tertiary</Button>
        <Button type='tertiary' disabled>
          Tertiary disabled
        </Button>
        <Button type='tertiary' loading adornment={<Preloader />}>
          Tertiary loading
        </Button>
      </div>
    </Storybook>
  );
};
interface IPlayground extends ButtonProps {
  text: string;
  adornment: boolean;
}

export const Playground = ({ text, adornment, ...args }: IPlayground) => {
  return (
    <Button {...args} onClick={action('onClick')} adornment={adornment ? <Preloader /> : undefined}>
      {text}
    </Button>
  );
};
Playground.argTypes = {
  text: { control: 'text', description: 'testsdsdcsdcds' },
  type: { control: 'inline-radio', options: ['primary', 'secondary', 'tertiary'] },
  children: { table: { disable: true } }, // remove children from the list of controls
  onClick: { table: { disable: true } },
  adornment: { control: 'boolean' },
};
Playground.args = { text: 'test', type: 'primary', adornment: true };
