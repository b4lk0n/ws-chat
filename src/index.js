import React from 'react';
import { render } from 'react-dom';
import './index.css';

import { ConnectionStatusIcon, Icon, IconButton, Text } from './components';

render(
  <div>
    <Icon value={'search'} />
    <Icon value={'search'} size={'small'} />
    <Icon value={'search'} size={'large'} />
    <hr />
    <Icon value={<ConnectionStatusIcon />} />
    <Icon value={<ConnectionStatusIcon />} size={'small'} />
    <Icon value={<ConnectionStatusIcon />} size={'large'} />
    <hr />
    <Icon value={<ConnectionStatusIcon success />} />
    <Icon value={<ConnectionStatusIcon success />} size={'small'} />
    <Icon value={<ConnectionStatusIcon success />} size={'large'} />
    <hr />
    <Icon value={<ConnectionStatusIcon success={false} />} />
    <Icon value={<ConnectionStatusIcon success={false} />} size={'small'} />
    <Icon value={<ConnectionStatusIcon success={false} />} size={'large'} />
    <hr />
    asdas
    <hr />
    <Text>Default text</Text>
    <hr />
    <Text variant={'title'}>Title text</Text>
    <hr />
    <Text variant={'subtitle'}>Subtitle text</Text>
    <hr />
    <Text variant={'caption'}>Caption text</Text>
    <hr />
    <Text variant={'button'}>Button text</Text>
    <hr />
    <IconButton icon={'add_circle_outline'} />
    <IconButton icon={'add_circle_outline'} disabled />
    <IconButton icon={'add_circle_outline'} size={'small'} />
    <IconButton icon={'add_circle_outline'} size={'large'} />
    <IconButton icon={<ConnectionStatusIcon success />} size={'large'} />
    <IconButton icon={<ConnectionStatusIcon success />} size={'large'} disabled />
  </div>,
  document.getElementById('root')
);
