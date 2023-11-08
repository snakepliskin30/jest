import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('initial value must be zero', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test('initial value based on the input props', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialValue: 20,
      },
    });
    expect(result.current.count).toBe(20);
  });

  test('decrementing the value', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.subtractCount());
    expect(result.current.count).toBe(-1);
  });

  test('increment the value', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialValue: 19,
      },
    });
    act(() => result.current.addCount());
    expect(result.current.count).toBe(20);
  });
});
