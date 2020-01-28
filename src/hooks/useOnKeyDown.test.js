import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useOnKeyDown } from './useOnKeyDown';

describe('useOnKeyDown()', () => {
  it('should execute listener on keydown', () => {
    const handler = jest.fn();

    const { unmount } = renderHook(() => useOnKeyDown('Escape', handler));
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handler).toBeCalledTimes(1);

    unmount();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handler).toBeCalledTimes(1);
  });
});
