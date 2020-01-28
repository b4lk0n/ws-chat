import React from 'react';
import { oneOf, node } from 'prop-types';
import cx from 'classnames';

import { Text } from '../Text';
import styles from './Button.module.css';

export const Button = ({ label, variant, className, ...props }) => (
  <button data-testid={'button'} {...props} className={cx(styles.root, styles[variant], className)}>
    <Text variant={'subtitle'} className={styles.label}>
      {label}
    </Text>
  </button>
);
Button.propTypes = {
  label: node.isRequired,
  variant: oneOf(['outlined', 'primary']),
};
