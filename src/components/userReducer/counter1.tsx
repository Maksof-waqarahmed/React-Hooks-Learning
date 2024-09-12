import React, { useReducer } from "react";

const initialState = 0;
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };
const reducer = (state: number, action: Action ) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function Counter1() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter1</h1>
      <div>
        <h2>Count  {count}</h2>
      </div>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  );
}

export default Counter1;
