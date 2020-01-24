import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Icon } from '../components';

export default {
  title: 'Icon',
  decorators: [withKnobs],
};

export const Default = () => (
  <Icon
    value={text('value', 'search')}
    size={select('size', {
      '—': undefined,
      small: 'small',
      large: 'large',
    })}
  />
);
