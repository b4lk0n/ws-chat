import React from 'react';
import { node, oneOf, oneOfType, string } from 'prop-types';
import cx from 'classnames';
import { Icon } from '../Icon';

import styles from './IconButton.module.css';

export const IconButton = ({ icon, size, className, ...props }) => (
  <button {...props} className={cx(styles.root, styles[size], className)}>
    <Icon value={icon} size={size === 'small' ? size : undefined} />
  </button>
);
IconButton.propTypes = {
  icon: oneOfType([string, node]).isRequired,
  size: oneOf(['small', 'large']),
  className: string,
};
