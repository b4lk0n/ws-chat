import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import './index.css';
import { Button } from './components';

render(
  <StrictMode>
    <div>
      <Button label={'Default button'} />
      <Button label={'Default button'} disabled />
    </div>

    <div>
      <Button variant={'outlined'} label={'Default button'} />
      <Button variant={'outlined'} label={'Default button'} disabled />
    </div>

    <div>
      <Button variant={'primary'} label={'Default button'} />
      <Button variant={'primary'} label={'Default button'} disabled />
    </div>
  </StrictMode>,
  document.getElementById('root')
);
