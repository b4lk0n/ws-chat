import React from 'react';
import cx from 'classnames';
import { Icon } from '../Icon';

import styles from './IconButton.module.css';

export const IconButton = ({ icon, size, className, ...props }) => (
  <button {...props} className={cx(styles.root, styles[size], className)}>
    <Icon value={icon} size={size === 'small' ? size : undefined} />
  </button>
);
