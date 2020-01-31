import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should renders correctly', () => {
    const clickHandler = jest.fn();
    const { getByTestId } = render(<Button label={'click me'} onClick={clickHandler} />);

    const button = getByTestId('button');
    expect(button).toHaveTextContent('click me');
    expect(clickHandler).not.toBeCalled();
    fireEvent.click(button);
    expect(clickHandler).toBeCalledTimes(1);
    expect(button).toMatchSnapshot();
  });

  ['outlined', 'primary'].forEach(variant => {
    it(`should render ${variant} button`, () => {
      const { getByTestId } = render(<Button label={'click me'} variant={variant} />);
      const button = getByTestId('button');

      expect(button).toHaveTextContent('click me');
      expect(button).toHaveClass(variant);
      expect(button).toMatchSnapshot();
    });
  });

  it('should add additional class if provided', () => {
    const { getByTestId } = render(<Button label={'click me'} className={'bordered'} />);
    const button = getByTestId('button');
    expect(button).toHaveClass('bordered');
    expect(button).toMatchSnapshot();
  });

  it('should not fire events if disabled', () => {
    const clickHandler = jest.fn();
    const { getByTestId } = render(<Button label={'click me'} onClick={clickHandler} disabled />);
    const button = getByTestId('button');
    fireEvent.click(button);
    expect(clickHandler).not.toBeCalled();
    expect(button).toMatchSnapshot();
  });
});
