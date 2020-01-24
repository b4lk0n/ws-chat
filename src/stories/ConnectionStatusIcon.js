import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Icon, ConnectionStatusIcon } from '../components';

export default {
  title: 'ConnectionStatusIcon',
  decorators: [withKnobs],
};

export const Default = () => (
  <Icon
    value={
      <ConnectionStatusIcon
        success={select('success', {
          '—': undefined,
          true: true,
          false: false,
        })}
      />
    }
    size={select('size', {
      '—': undefined,
      small: 'small',
      large: 'large',
    })}
  />
);
