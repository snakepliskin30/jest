import { MockingFunction } from './mockfunction.type';

export const Mockfunction = (props: MockingFunction) => {
  return (
    <div>
      <p>Mocking Function</p>
      <h2>{props.counter}</h2>
      {props.incrementFunc && <button onClick={() => props.incrementFunc && props.incrementFunc()}>Increment</button>}
      {props.decrementFunc && <button onClick={() => props.decrementFunc && props.decrementFunc()}>Decrement</button>}
    </div>
  );
};
