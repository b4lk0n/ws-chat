import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { ChatHeader, Button } from '../components';

export default {
  title: 'ChatHeader',
  decorators: [withKnobs],
};

export const Default = () => (
  <ChatHeader
    url={text('url', 'wss://echo.websocket.org')}
    actions={select('connectionStatus', {
      '—': undefined,
      success: true,
      failure: false,
    })}
  />
);
