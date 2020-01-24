import React from 'react';
import { oneOf, string } from 'prop-types';
import cx from 'classnames';

import styles from './Text.module.css';

export const Text = ({ variant, className, children }) => (
  <span className={cx(styles.root, styles[variant], className)}>{children}</span>
);
Text.propTypes = {
  variant: oneOf(['title', 'subtitle', 'caption']),
  className: string,
};
