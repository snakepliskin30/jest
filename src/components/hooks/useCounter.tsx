import { useState } from 'react';
import { Counter } from './counter.type';

export const useCounter = (props: Counter = { initialValue: 0 }) => {
  const [count, setCount] = useState(props.initialValue);
  const addCount = () => setCount(count + 1);
  const subtractCount = () => setCount(count - 1);
  return { count, addCount, subtractCount };
};
