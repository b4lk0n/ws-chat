import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IconButton } from './IconButton';

const CustomIcon = () => <span>custom</span>;

describe('<IconButton />', () => {
  it('should render string icon', () => {
    const clickHandler = jest.fn();
    const { container, getByText } = render(<IconButton icon={'account'} onClick={clickHandler} />);

    const icon = getByText('account');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('material-icons');
    fireEvent.click(container.firstChild);
    expect(clickHandler).toBeCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render custom icon', () => {
    const clickHandler = jest.fn();
    const { container, getByText } = render(<IconButton icon={<CustomIcon />} onClick={clickHandler} />);

    const icon = getByText('custom');
    expect(icon).toBeInTheDocument();
    expect(icon).not.toHaveClass('material-icons');
    fireEvent.click(container.firstChild);
    expect(clickHandler).toBeCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should add additional class if provided', () => {
    const { container } = render(<IconButton icon={'account'} className={'bordered'} />);
    expect(container.firstChild).toHaveClass('bordered');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render large icon button', () => {
    const { container, getByText } = render(<IconButton icon={'account'} size={'large'} />);
    expect(container.firstChild).toHaveClass('large');
    expect(getByText('account')).toHaveClass('material-icons');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render small icon button', () => {
    const { container, getByText } = render(<IconButton icon={'account'} size={'small'} />);
    expect(container.firstChild).toHaveClass('small');
    expect(getByText('account')).toHaveClass('material-icons', 'small');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not fire events if disabled', () => {
    const clickHandler = jest.fn();
    const { container } = render(<IconButton icon={'account'} onClick={clickHandler} disabled />);
    fireEvent.click(container.firstChild);
    expect(clickHandler).not.toBeCalled();
    expect(container.firstChild).toMatchSnapshot();
  });
});
