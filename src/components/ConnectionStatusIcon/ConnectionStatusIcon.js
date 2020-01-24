import React from 'react';
import { bool, string } from 'prop-types';
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
ConnectionStatusIcon.propTypes = {
  success: bool,
  className: string,
};
