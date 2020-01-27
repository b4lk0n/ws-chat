import React from 'react';
import { Text } from './Text';
import { render } from '@testing-library/react';

describe('<Text />', () => {
  it('should render the text', () => {
    const { container, getByText } = render(<Text>Hello</Text>);
    expect(getByText('Hello')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should add additional class if provided', () => {
    const { container } = render(<Text className={'centered'}>Hello</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['title', 'subtitle', 'caption'].forEach(variant => {
    it(`should render ${variant} text`, () => {
      const { container } = render(<Text variant={variant}>Hello</Text>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
