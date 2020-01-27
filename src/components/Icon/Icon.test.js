import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import { Icon } from './Icon';

const CustomIcon = () => <span />;

describe('<Icon />', () => {
  it('should render children', () => {
    const { container } = render(<Icon value={'account'} />);
    expect(getNodeText(container.firstChild)).toBe('account');
  });

  it('should not add additional classes by default', () => {
    const { container } = render(<Icon value={'account'} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should add additional classes if provided', () => {
    const { container } = render(<Icon value={'account'} className={'colored'} />);
    expect(container.firstChild).toHaveClass('colored');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not add material-icons class for custom icon elements', () => {
    const { container } = render(<Icon value={<CustomIcon />} />);
    expect(container.firstChild).not.toHaveClass('material-icons');
    expect(container.firstChild).toMatchSnapshot();
  });

  ['small', 'large'].forEach(size => {
    it(`should render ${size} icon`, () => {
      const { container } = render(<Icon value={'account'} size={size} />);
      expect(container.firstChild).toHaveClass(size);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
