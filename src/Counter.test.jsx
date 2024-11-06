import { describe, test, it, expect } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';

import Counter from './Counter.jsx';


test('renders counter button', function () {
  render(<Counter />);
  const buttonElement = screen.getByText(/Clicked: 0/i);
  expect(buttonElement).toBeInTheDocument();
});

test('count increases on button click', function () {
  render(<Counter />);
  const buttonElement = screen.getByText(/Clicked: 0/i);
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/Clicked: 1/i);
});

test('matches snapshot', function () {
  const { container } = render(<Counter />);
  expect(container).toMatchSnapshot();
});
