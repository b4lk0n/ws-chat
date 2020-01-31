import React, { useCallback } from 'react';
import { string, instanceOf, bool, func, shape } from 'prop-types';
import cx from 'classnames';
import { format } from 'date-fns';
import { Text } from '../Text';
import { ConnectionStatusIcon } from '../ConnectionStatusIcon';
import { Icon } from '../Icon';

import styles from './ServerNavItem.module.css';
import { isFunction } from 'lodash-es';

export const ServerNavItem = ({ server, onClick, className, ...props }) => {
  const handleClick = useCallback(() => {
    if (isFunction(onClick)) {
      onClick(server);
    }
  }, [server, onClick]);

  return (
    <div
      data-testid={'server-nav-item'}
      {...props}
      className={cx(
        styles.root,
        {
          [styles.clickable]: isFunction(onClick),
        },
        className
      )}
      onClick={handleClick}
    >
      <div className={styles.info}>
        <Text className={styles.serverUrl}>{server.url}</Text>

        {server.updatedAt ? (
          <Text variant={'caption'} className={styles.updatedAt}>
            {format(server.updatedAt, 'd LLL uuuu, HH:mm')}
          </Text>
        ) : null}
      </div>

      <div className={styles.connectionStatus}>
        <Icon value={<ConnectionStatusIcon success={server.connectionStatus} />} />
      </div>
    </div>
  );
};
ServerNavItem.propTypes = {
  server: shape({
    url: string.isRequired,
    updatedAt: instanceOf(Date),
    connectionStatus: bool,
  }).isRequired,
  onClick: func,
  className: string,
};
