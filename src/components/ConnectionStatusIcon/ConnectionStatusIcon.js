import React from 'react';
import { isBoolean } from 'lodash-es';
import cx from 'classnames';

import styles from './ConnectionStatusIcon.module.css';

export const ConnectionStatusIcon = ({ success, className }) => (
  <span
    className={cx(
      styles.root,
      {
        [styles.success]: isBoolean(success) && success,
        [styles.failure]: isBoolean(success) && !success,
      },
      className
    )}
  />
);
