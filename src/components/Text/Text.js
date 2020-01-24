import React from 'react';
import cx from 'classnames';

import styles from './Text.module.css';

export const Text = ({ variant, className, children }) => (
  <span className={cx(styles.root, styles[variant], className)}>{children}</span>
);
