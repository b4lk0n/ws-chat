import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { Text } from '../components';

export default {
  title: 'Text',
  decorators: [withKnobs],
};

export const Default = () => (
  <Text
    variant={select('variant', {
      '—': undefined,
      title: 'title',
      subtitle: 'subtitle',
      caption: 'caption',
    })}
  >
    {text('children', 'Example text')}
  </Text>
);
