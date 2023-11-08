export type MockingFunction = {
  counter: number;
  incrementFunc?: () => void;
  decrementFunc?: () => void;
};
