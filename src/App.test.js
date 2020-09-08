import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders "Recieve update about Tray.io product by email" once clicked on Privacy', () => {
  const { allByText } = render(<App />)
  console.log("All By Text", allByText )
  
})