import { render, screen } from '@testing-library/react';
import { Mockfunction } from './mockfunction';
import user from '@testing-library/user-event';

describe('MockFunction', () => {
  test('renders correctly', () => {
    render(<Mockfunction counter={0} />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });

  test('mock functions as props', async () => {
    user.setup();
    const incFunc = jest.fn();
    const decFunct = jest.fn();
    render(<Mockfunction counter={0} incrementFunc={incFunc} decrementFunc={decFunct} />);
    const incBtn = screen.getByRole('button', {
      name: 'Increment',
    });
    const decBtn = screen.getByRole('button', {
      name: 'Decrement',
    });
    await user.click(incBtn);
    await user.click(decBtn);
    expect(incFunc).toHaveBeenCalledTimes(1);
    expect(decFunct).toHaveBeenCalledTimes(1);
  });
});
