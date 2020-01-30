import React from 'react';
import { withKnobs, text, select, date } from '@storybook/addon-knobs';
import { ServerNavItem } from '../components';

export default {
  title: 'ServerNavItem',
  decorators: [withKnobs],
};

export const Default = () => (
  <ServerNavItem
    url={text('url', 'wss://echo.websocket.org')}
    updatedAt={date('updatedAt', new Date())}
    connectionStatus={select('connectionStatus', {
      '—': undefined,
      success: true,
      failure: false,
    })}
  />
);
