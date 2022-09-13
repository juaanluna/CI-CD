import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Teste CICD/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders description', () => {
  render(<App />);
  const linkElement = screen.getByText(/Esse projeto tem como objetivo a criação de um CICD/i);
  expect(linkElement).toBeInTheDocument();
});
