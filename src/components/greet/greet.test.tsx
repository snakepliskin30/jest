import { render, screen } from '@testing-library/react';
import Greet from './greet';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const element = screen.getByText(/hello/i);
    expect(element).toBeInTheDocument();
  });

  test('renders with a name', () => {
    render(<Greet greetName='Rod' />);
    const element = screen.getByText(/hello rod/i);
    expect(element).toBeInTheDocument();
  });
});
