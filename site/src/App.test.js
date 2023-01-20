import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hack Club link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn more about Hack Club/i);
  expect(linkElement).toBeInTheDocument();
});
