import React from 'react';
import { format } from 'date-fns';
import cx from 'classnames';
import { Text } from '../Text';

import styles from './Message.module.css';

export const Message = ({ payload, createdAt, className, ...props }) => (
  <div className={cx(styles.root, className)}>
    <pre>
      <code>{payload}</code>
    </pre>

    <time dateTime={createdAt.toISOString()}>
      <Text variant={'caption'} className={styles.dateTime}>
        {format(createdAt, 'd LLL uuuu, HH:mm')}
      </Text>
    </time>
  </div>
);
