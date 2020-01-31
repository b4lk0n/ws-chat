import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ServerNavItem } from './ServerNavItem';

const timestamp = 1580469500994;
const server = {
  url: 'wss://echo.websocket.org',
  updatedAt: new Date(timestamp),
};

describe('<ServerNavItem />', () => {
  it('should renders correctly', () => {
    const { getByTestId } = render(<ServerNavItem server={server} />);
    expect(getByTestId('server-nav-item')).toMatchSnapshot();
  });

  it('should call onClick handler', () => {
    const handler = jest.fn();
    const { getByTestId } = render(<ServerNavItem server={server} onClick={handler} />);
    const item = getByTestId('server-nav-item');

    expect(handler).not.toBeCalled();
    fireEvent.click(item);
    expect(handler).toBeCalledTimes(1);
    expect(handler).toBeCalledWith(server);
  });
});
