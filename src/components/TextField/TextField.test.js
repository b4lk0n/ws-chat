import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextField } from './TextField';

describe('<TextField />', () => {
  it('should render only input by default', () => {
    const { container, getByPlaceholderText } = render(<TextField placeholder={'Text'} />);
    expect(getByPlaceholderText('Text')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild.childNodes).toHaveLength(1);
    expect(container.firstChild.firstChild).toContainElement(container.firstChild.lastChild);
  });

  it('should add additional class if provided', () => {
    const { container } = render(<TextField className={'title'} />);
    expect(container.firstChild).toHaveClass('title');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render icon', () => {
    const { container } = render(<TextField icon={'search'} />);
    expect(container.firstChild).toHaveClass('withIcon');
    expect(container.firstChild.childNodes).toHaveLength(2);
    expect(container.firstChild.lastChild).toHaveTextContent('search');
    expect(container.firstChild.lastChild).toHaveClass('material-icons', 'icon');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render clear button for empty input', () => {
    const { container } = render(<TextField withClear />);
    expect(container.firstChild).toHaveClass('withClear');
    expect(container.firstChild.childNodes).toHaveLength(1);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render clear button for input with value', () => {
    const changeHandler = jest.fn();
    const { container } = render(<TextField withClear value={'Text'} onChange={changeHandler} />);
    expect(container.firstChild).toHaveClass('withClear');
    expect(container.firstChild.childNodes).toHaveLength(2);
    expect(container.firstChild.lastChild).toHaveClass('clearButton', 'small');
    fireEvent.click(container.firstChild.lastChild);
    expect(changeHandler).toBeCalledTimes(1);
    expect(changeHandler).toBeCalledWith('');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render disabled elements', () => {
    const changeHandler = jest.fn();
    const { container } = render(<TextField withClear value={'Text'} onChange={changeHandler} disabled />);
    expect(container.firstChild).toHaveClass('disabled');
    fireEvent.click(container.firstChild.lastChild);
    expect(changeHandler).not.toBeCalled();
    expect(container.firstChild).toMatchSnapshot();
  });
});
