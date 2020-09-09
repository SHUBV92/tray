import React from './node_modules/react';
import { render } from './node_modules/@testing-library/react';
import Done from './Done.jsx';

test('renders learn react link', () => {
  const { getByText } = render(<Done />);
  console.log(getByText)
  const linkElement = getByText(<h3></h3>);
  expect(linkElement).toContainText();
});
