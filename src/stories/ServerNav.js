import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { ServerNav } from '../components';

export default {
  title: 'ServerNav',
};

const servers = [
  { id: 1, url: 'wss://server1.com', updatedAt: new Date(1580475448818) },
  { id: 2, url: 'wss://server2.com', updatedAt: new Date(1580475471956), connectionStatus: true },
  { id: 3, url: 'wss://server3.com', updatedAt: new Date(1580475493072), connectionStatus: false },
  { id: 4, url: 'wss://server4.com' },
];

export const Default = () => {
  const [value, setValue] = useState();

  return (
    <div style={{ width: 320 }}>
      <ServerNav servers={servers} value={value} onChange={setValue} onCreate={action('onCreate')} />
    </div>
  );
};
