import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MenuButton } from './MenuButton';

const items = [
  { type: 'text/plain', name: 'Text' },
  { type: 'application/json', name: 'JSON' },
];

describe('MenuButton', () => {
  it('should render closed by default', () => {
    const { getByTestId } = render(
      <MenuButton items={items} label={'Select'} onChange={jest.fn()} getItemKey={item => item.type} />
    );

    const menuButton = getByTestId('menu-button');
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).not.toHaveClass('menuOpen');
    expect(menuButton).toHaveTextContent('Select');
    expect(menuButton).toMatchSnapshot();
  });

  it('should open menu by clicking on a button', () => {
    const { getByTestId } = render(
      <MenuButton items={items} label={'Select'} onChange={jest.fn()} getItemKey={item => item.type} />
    );

    const menuButton = getByTestId('menu-button');

    expect(menuButton).not.toHaveClass('menuOpen');
    fireEvent.click(getByTestId('menu-button-anchor'));
    expect(menuButton).toHaveClass('menuOpen');
    fireEvent.click(document);
    expect(menuButton).not.toHaveClass('menuOpen');
  });

  it('should select an item by clicking on it', () => {
    const changeHandler = jest.fn();

    const { container } = render(
      <MenuButton items={items} label={'Select'} onChange={changeHandler} getItemKey={item => item.type} />
    );
    expect(container.firstChild.firstChild).toHaveTextContent('Select');
    fireEvent.click(container.firstChild.firstChild);
    expect(container.firstChild).toHaveClass('menuOpen');
    fireEvent.click(container.querySelector('.menuItem'));
    expect(changeHandler).toBeCalledTimes(1);
    expect(changeHandler).toBeCalledWith(items[0]);
    expect(container.firstChild).not.toHaveClass('menuOpen');
  });

  it('should close menu by Escape', () => {
    const { container } = render(
      <MenuButton items={items} label={'Select'} onChange={jest.fn()} getItemKey={item => item.type} />
    );

    expect(container.firstChild).not.toHaveClass('menuOpen');
    fireEvent.click(container.firstChild.firstChild);
    expect(container.firstChild).toHaveClass('menuOpen');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(container.firstChild).not.toHaveClass('menuOpen');
  });
});
