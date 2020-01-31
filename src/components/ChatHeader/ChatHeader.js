import React from 'react';
import { string, node, bool } from 'prop-types';
import { Text } from '../Text';
import { Button } from '../Button';

import styles from './ChatHeader.module.css';

export const ChatHeader = ({ url, connectionStatus, actions, className, ...props }) => {
  return (
    <div data-testid={'chat-header'} {...props} className={styles.root}>
      <Text variant={'Title'} className={styles.serverUrl} data-testid={'chat-header-title'}>
        {url}
      </Text>

      {actions}
    </div>
  );
};
ChatHeader.propTypes = {
  url: string.isRequired,
  connectionStatus: bool,
  actions: node,
  className: string,
};
