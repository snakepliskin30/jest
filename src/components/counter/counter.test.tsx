import user from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Counter } from './counter';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />);
    const counterVal = screen.getByRole('heading');
    expect(counterVal).toBeInTheDocument();

    const btnElement = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(btnElement).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });

  test('renders a count of 1 after clicking once', async () => {
    user.setup();
    render(<Counter />);
    const btnElement = screen.getByRole('button', {
      name: 'Increment',
    });
    await user.click(btnElement);
    const counterElement = screen.getByRole('heading');
    expect(counterElement).toHaveTextContent('1');
  });

  test('renders a count of 2 after clicking twice', async () => {
    user.setup();
    render(<Counter />);
    const btnElement = screen.getByRole('button', {
      name: 'Increment',
    });
    await user.click(btnElement);
    await user.click(btnElement);
    const counterElement = screen.getByRole('heading');
    expect(counterElement).toHaveTextContent('2');
  });

  test('displays number input to counter and set is clicked', async () => {
    user.setup();
    render(<Counter />);
    const inputElement = screen.getByRole('spinbutton');
    await user.type(inputElement, '10');
    const btnElement = screen.getByRole('button', {
      name: 'Set',
    });
    await user.click(btnElement);
    const counterElement = screen.getByRole('heading');
    expect(counterElement).toHaveTextContent('10');
  });

  test('tab order of elements', async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole('button', {
      name: 'Increment',
    });
    const inputElement = screen.getByRole('spinbutton');
    const btnElement = screen.getByRole('button', {
      name: 'Set',
    });
    await user.tab();
    expect(incrementBtn).toHaveFocus();
    await user.tab();
    expect(inputElement).toHaveFocus();
    await user.tab();
    expect(btnElement).toHaveFocus();
  });
});
