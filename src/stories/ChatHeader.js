import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { ChatHeader, Button } from '../components';

export default {
  title: 'ChatHeader',
  decorators: [withKnobs],
};

export const Default = () => {
  const isConnected = select('connectionStatus', {
    '—': undefined,
    success: true,
    failure: false,
  });

  return (
    <ChatHeader
      url={text('url', 'wss://echo.websocket.org')}
      actions={
        <Button variant={'outlined'} label={isConnected ? 'Disconnect' : 'Connect'} onClick={action('onClick')} />
      }
    />
  );
};
