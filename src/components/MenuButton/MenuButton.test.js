import React from 'react';
import { render } from '@testing-library/react';
import { MenuButton } from './MenuButton';

const items = [
  { type: 'text/plain', name: 'Text' },
  { type: 'application/json', name: 'JSON' },
];

describe('MenuButton', () => {
  it('should render closed by default', () => {
    // const { container } = render(<MenuButton items={items} />);
  });
});
