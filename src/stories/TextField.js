import React, { useState } from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { TextField } from '../components';

export default {
  title: 'TextField',
  decorators: [withKnobs],
};

export const Default = () => {
  const [value, setValue] = useState('');

  return (
    <TextField
      placeholder={text('placeholder', 'Enter any text…')}
      value={value}
      onChange={setValue}
      icon={text('icon', 'search')}
      withClear={boolean('withClear', false)}
      disabled={boolean('disabled', false)}
    />
  );
};
