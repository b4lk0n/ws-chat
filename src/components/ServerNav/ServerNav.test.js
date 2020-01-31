import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ServerNav } from './ServerNav';

const servers = [
  { id: 1, url: 'wss://server1.com', updatedAt: new Date(1580475448818) },
  { id: 2, url: 'wss://server2.com', updatedAt: new Date(1580475471956), connectionStatus: true },
  { id: 3, url: 'wss://server3.com', updatedAt: new Date(1580475493072), connectionStatus: false },
  { id: 4, url: 'wss://server4.com' },
];

describe('<ServerNav />', () => {
  it('should renders correctly', () => {
    const changeHandler = jest.fn();
    const createHandler = jest.fn();
    const { getByTestId, getAllByTestId } = render(
      <ServerNav servers={servers} onChange={changeHandler} onCreate={createHandler} />
    );
    const nav = getByTestId('server-nav');

    expect(changeHandler).not.toBeCalled();
    expect(createHandler).not.toBeCalled();
    fireEvent.click(getByTestId('server-nav-create-button'));
    expect(createHandler).toBeCalledTimes(1);
    fireEvent.click(getAllByTestId('server-nav-item')[0]);
    expect(changeHandler).toBeCalledTimes(1);
    expect(changeHandler).toBeCalledWith(servers[0]);

    expect(nav).toMatchSnapshot();
  });
});
