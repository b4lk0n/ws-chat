import React, { useRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useOnClickOutside } from './useOnClickOutside';

describe('useOnClickOutside()', () => {
  const MyComponent = ({ onClickOutside }) => {
    const ref = useRef();
    useOnClickOutside(ref, onClickOutside);

    return <div ref={ref}>text</div>;
  };

  it('should call listener when clicking outside of element', () => {
    const outsideClickHandler = jest.fn();
    const { container } = render(<MyComponent onClickOutside={outsideClickHandler} />);
    fireEvent.click(container.firstChild);
    expect(outsideClickHandler).toBeCalledTimes(0);
    fireEvent.click(document);
    expect(outsideClickHandler).toBeCalledTimes(1);
  });
});
