import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IconButton } from './IconButton';

const CustomIcon = () => <span>custom</span>;

describe('<IconButton />', () => {
  it('should render string icon', () => {
    const clickHandler = jest.fn();
    const { getByTestId } = render(<IconButton icon={'account'} onClick={clickHandler} />);

    const icon = getByTestId('icon');
    const iconButton = getByTestId('icon-button');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('material-icons');
    fireEvent.click(iconButton);
    expect(clickHandler).toBeCalledTimes(1);
    expect(iconButton).toMatchSnapshot();
  });

  it('should render custom icon', () => {
    const clickHandler = jest.fn();
    const { getByTestId } = render(<IconButton icon={<CustomIcon />} onClick={clickHandler} />);

    const icon = getByTestId('icon');
    const iconButton = getByTestId('icon-button');
    expect(icon).toBeInTheDocument();
    expect(icon).not.toHaveClass('material-icons');
    fireEvent.click(iconButton);
    expect(clickHandler).toBeCalledTimes(1);
    expect(iconButton).toMatchSnapshot();
  });

  it('should add additional class if provided', () => {
    const { getByTestId } = render(<IconButton icon={'account'} className={'bordered'} />);
    const iconButton = getByTestId('icon-button');
    expect(iconButton).toHaveClass('bordered');
    expect(iconButton).toMatchSnapshot();
  });

  it('should render large icon button', () => {
    const { getByTestId } = render(<IconButton icon={'account'} size={'large'} />);
    const iconButton = getByTestId('icon-button');
    expect(iconButton).toHaveClass('large');
    expect(getByTestId('icon')).toHaveClass('material-icons');
    expect(iconButton).toMatchSnapshot();
  });

  it('should render small icon button', () => {
    const { getByTestId } = render(<IconButton icon={'account'} size={'small'} />);
    const iconButton = getByTestId('icon-button');
    expect(iconButton).toHaveClass('small');
    expect(getByTestId('icon')).toHaveClass('material-icons', 'small');
    expect(iconButton).toMatchSnapshot();
  });

  it('should not fire events if disabled', () => {
    const clickHandler = jest.fn();
    const { getByTestId } = render(<IconButton icon={'account'} onClick={clickHandler} disabled />);
    const iconButton = getByTestId('icon-button');
    fireEvent.click(iconButton);
    expect(clickHandler).not.toBeCalled();
    expect(iconButton).toMatchSnapshot();
  });
});
