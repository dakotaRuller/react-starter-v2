import { createContext } from 'react'

const TestContext = createContext({
    arrayProp: [
      "one",
      "two",
      "three"
    ],
    propOne: "Random Value"
  }
);

export const TestContextProvider = TestContext.Provider;
export const TestContextConsumer = TestContext.Consumer;

export default TestContext;