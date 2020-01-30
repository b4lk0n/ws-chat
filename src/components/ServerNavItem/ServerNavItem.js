import React from 'react';
import { string, instanceOf, bool } from 'prop-types';
import { format } from 'date-fns';
import { Text } from '../Text';
import { ConnectionStatusIcon } from '../ConnectionStatusIcon';
import { Icon } from '../Icon';

import styles from './ServerNavItem.module.css';

export const ServerNavItem = ({ url, updatedAt, connectionStatus }) => {
  return (
    <div className={styles.root}>
      <Text>{url}</Text>
      {updatedAt ? <Text>{format(updatedAt, 'd LLL uuuu, HH:mm')}</Text> : null}

      <Icon value={<ConnectionStatusIcon success={connectionStatus} />} />
    </div>
  );
};
