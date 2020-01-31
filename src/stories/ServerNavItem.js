import React from 'react';
import { withKnobs, text, select, date } from '@storybook/addon-knobs';
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
        updatedAt: date('updatedAt', new Date()),
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
