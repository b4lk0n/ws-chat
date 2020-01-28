import React, { useState, useCallback, useRef } from 'react';
import cx from 'classnames';
import { string, array, func, any } from 'prop-types';
import { Button } from '../Button';
import { useOnClickOutside, useOnKeyDown } from '../../hooks';
import styles from './MenuButton.module.css';

export const MenuButton = ({ label, items, onChange, value, getItemLabel, getItemKey, className, ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const handleItemClick = useCallback(
    item => () => {
      closeMenu();
      onChange(item);
    },
    [onChange]
  );

  const containerRef = useRef();

  useOnClickOutside(containerRef, closeMenu);
  useOnKeyDown('Escape', closeMenu);

  return (
    <div
      ref={containerRef}
      className={cx(
        styles.root,
        {
          [styles.menuOpen]: menuOpen,
        },
        className
      )}
      data-testid={'menu-button'}
    >
      <Button
        {...props}
        label={value ? getItemLabel(value) : label}
        onClick={toggleMenu}
        data-testid={'menu-button-anchor'}
      />

      <div className={styles.menu} data-testid={'menu-button-list'}>
        {items.map(item => (
          <Button
            key={getItemKey(item)}
            label={getItemLabel(item)}
            onClick={handleItemClick(item)}
            className={styles.menuItem}
            data-testid={'menu-item'}
          />
        ))}
      </div>
    </div>
  );
};
MenuButton.propTypes = {
  label: string.isRequired,
  items: array.isRequired,
  onChange: func.isRequired,
  value: any,
  getItemLabel: func,
  getItemKey: func,
  className: string,
};
MenuButton.defaultProps = {
  getItemLabel: item => item.name,
  getItemKey: item => item.id,
};
