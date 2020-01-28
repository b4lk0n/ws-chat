import React from 'react';
import { render } from '@testing-library/react';
import { ConnectionStatusIcon } from './ConnectionStatusIcon';

describe('<ConnectionStatusIcon />', () => {
  it('should not add any additional classes by default', () => {
    const { getByTestId } = render(<ConnectionStatusIcon />);
    expect(getByTestId('connection-status-icon')).toMatchSnapshot();
  });

  it('should add additional classes if provided', () => {
    const { getByTestId } = render(<ConnectionStatusIcon className={'animated'} />);
    const icon = getByTestId('connection-status-icon');
    expect(icon).toHaveClass('animated');
    expect(icon).toMatchSnapshot();
  });

  [true, false].forEach(success => {
    it(`should render success={${success}} status icon`, () => {
      const { getByTestId } = render(<ConnectionStatusIcon success={success} />);
      const icon = getByTestId('connection-status-icon');
      expect(icon).toHaveClass(success ? 'success' : 'failure');
      expect(icon).toMatchSnapshot();
    });
  });
});
