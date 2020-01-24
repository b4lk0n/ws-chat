import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from '../components';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const Default = () => (
  <Button
    label={text('label', 'Click me')}
    variant={select('variant', {
      '—': undefined,
      outlined: 'outlined',
      primary: 'primary',
    })}
    disabled={boolean('disabled')}
    onClick={action('onClick')}
  />
);
