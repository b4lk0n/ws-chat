import React, { useState, useMemo } from 'react';
import { arrayOf, shape, oneOfType, number, string, instanceOf, bool, func } from 'prop-types';
import cx from 'classnames';
import { TextField } from '../TextField';
import { IconButton } from '../IconButton';
import { ServerNavItem } from '../ServerNavItem';

import styles from './ServerNav.module.css';

export const ServerNav = ({ servers, value, onChange, onCreate, className, ...props }) => {
  const [search, setSearch] = useState('');

  const filteredServers = useMemo(() => {
    return search ? servers.filter(({ url }) => url.includes(search.toLowerCase())) : servers;
  }, [servers, search]);

  return (
    <div data-testid={'server-nav'} {...props} className={cx(styles.root, className)}>
      <div className={styles.header}>
        <TextField
          placeholder={'Search'}
          value={search}
          onChange={setSearch}
          icon={'search'}
          withClear
          className={styles.searchField}
          data-testid={'server-nav-search-field'}
        />

        <IconButton
          icon={'add_circle_outline'}
          size={'large'}
          onClick={onCreate}
          data-testid={'server-nav-create-button'}
        />
      </div>

      <div className={styles.serversList}>
        {filteredServers.map(server => (
          <ServerNavItem
            server={server}
            key={server.id}
            onClick={onChange}
            className={cx(styles.serverItem, {
              [styles.active]: value === server,
            })}
          />
        ))}
      </div>
    </div>
  );
};

const serverShape = shape({
  id: oneOfType([string, number]).isRequired,
  url: string.isRequired,
  updatedAt: instanceOf(Date),
  connectionStatus: bool,
});
ServerNav.propTypes = {
  servers: arrayOf(serverShape).isRequired,
  onChange: func.isRequired,
  onCreate: func.isRequired,
  value: serverShape,
  className: string,
};
