import React from 'react';
import { render } from '@testing-library/react';
import { ConnectionStatusIcon } from './ConnectionStatusIcon';

describe('<ConnectionStatusIcon />', () => {
  it('should not add any additional classes by default', () => {
    const { container } = render(<ConnectionStatusIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should add additional classes if provided', () => {
    const { container } = render(<ConnectionStatusIcon className={'animated'} />);
    expect(container.firstChild).toHaveClass('animated');
    expect(container.firstChild).toMatchSnapshot();
  });

  [true, false].forEach(success => {
    it(`should render success={${success}} status icon`, () => {
      const { container } = render(<ConnectionStatusIcon success={success} />);
      expect(container.firstChild).toHaveClass(success ? 'success' : 'failure');
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
