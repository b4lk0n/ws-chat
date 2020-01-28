import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import { Icon } from './Icon';

const CustomIcon = () => <span />;

describe('<Icon />', () => {
  it('should render children', () => {
    const { container } = render(<Icon value={'account'} />);
    expect(container).toHaveTextContent('account');
  });

  it('should not add additional classes by default', () => {
    const { container } = render(<Icon value={'account'} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should add additional classes if provided', () => {
    const { getByTestId } = render(<Icon value={'account'} className={'colored'} />);
    const icon = getByTestId('icon');
    expect(icon).toHaveClass('colored');
    expect(icon).toMatchSnapshot();
  });

  it('should not add material-icons class for custom icon elements', () => {
    const { getByTestId } = render(<Icon value={<CustomIcon />} />);
    const icon = getByTestId('icon');
    expect(icon).not.toHaveClass('material-icons');
    expect(icon).toMatchSnapshot();
  });

  ['small', 'large'].forEach(size => {
    it(`should render ${size} icon`, () => {
      const { getByTestId } = render(<Icon value={'account'} size={size} />);
      const icon = getByTestId('icon');
      expect(icon).toHaveClass(size);
      expect(icon).toMatchSnapshot();
    });
  });
});
