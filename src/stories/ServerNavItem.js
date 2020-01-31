import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ServerNavItem } from '../components';

export default {
  title: 'ServerNavItem',
  decorators: [withKnobs],
};

export const Default = () => (
  <div style={{ width: 320 }}>
    <ServerNavItem
      server={{
        url: text('url', 'wss://echo.websocket.org'),
        updatedAt: new Date(1580473734102),
        connectionStatus: select('connectionStatus', {
          '—': undefined,
          success: true,
          failure: false,
        }),
      }}
      onClick={action('onClick')}
    />
  </div>
);
