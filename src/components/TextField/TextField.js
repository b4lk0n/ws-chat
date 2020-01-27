import React, { useCallback } from 'react';
import cx from 'classnames';
import { isFunction } from 'lodash-es';
import { string, bool } from 'prop-types';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

import styles from './TextField.module.css';

export const TextField = ({ icon, withClear, onChange, className, ...props }) => {
  const handleChange = useCallback(
    e => {
      if (isFunction(onChange)) {
        onChange(e.target.value, e);
      }
    },
    [onChange]
  );
  const handleClear = useCallback(() => {
    if (!props.disabled && isFunction(onChange)) {
      onChange('');
    }
  }, [onChange, props.disabled]);

  return (
    <div
      className={cx(
        styles.root,
        {
          [styles.withIcon]: !!icon,
          [styles.withClear]: withClear,
          [styles.disabled]: props.disabled,
        },
        className
      )}
    >
      <input {...props} onChange={handleChange} />

      {icon && <Icon value={icon} className={styles.icon} />}
      {withClear && props.value && (
        <IconButton icon={'cancel'} size={'small'} onClick={handleClear} className={styles.clearButton} />
      )}
    </div>
  );
};
TextField.propTypes = {
  icon: string,
  withSearch: bool,
  className: string,
};
