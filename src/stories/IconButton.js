import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { IconButton } from '../components';

export default {
  title: 'IconButton',
  decorators: [withKnobs],
};

export const Default = () => (
  <IconButton
    icon={text('icon', 'add_circle_outline')}
    onClick={action('onClick')}
    size={select('size', {
      '—': undefined,
      small: 'small',
      large: 'large',
    })}
  />
);
