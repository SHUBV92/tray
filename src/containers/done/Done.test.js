import React from 'react';
import { render } from '@testing-library/react';
import Done from './Done.jsx';

test('renders learn react link', () => {
  const { getByText } = render(<Done />);
  console.log(getByText)
  const linkElement = getByText(<h3></h3>);
  expect(linkElement).toContainText();
});
