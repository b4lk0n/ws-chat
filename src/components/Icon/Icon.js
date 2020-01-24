import React from 'react';
import { isString } from 'lodash-es';
import cx from 'classnames';

import styles from './Icon.module.css';

export const Icon = ({ value, size, className }) => {
  return (
    <span
      className={cx(
        styles.root,
        styles[size],
        {
          'material-icons': isString(value),
        },
        className
      )}
    >
      {value}
    </span>
  );
};
