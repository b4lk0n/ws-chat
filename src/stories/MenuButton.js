import React, { useState, useCallback } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MenuButton } from '../components';

export default {
  title: 'MenuButton',
  decorators: [withKnobs],
};

const items = [
  { type: 'text', name: 'Text' },
  { type: 'json', name: 'JSON' },
  { type: 'asdas', name: 'application/json' },
];

export const Default = () => {
  const [value, setValue] = useState(null);
  const getItemLabel = useCallback(item => item.name, []);
  const getItemKey = useCallback(item => item.type, []);

  return (
    <MenuButton
      variant={'outlined'}
      label={'Select type'}
      items={items}
      value={value}
      onChange={setValue}
      getItemLabel={getItemLabel}
      getItemKey={getItemKey}
    />
  );
};
