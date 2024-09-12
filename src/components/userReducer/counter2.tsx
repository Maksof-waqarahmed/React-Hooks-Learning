import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCount: 0
}
type Action = { type: 'increment', value: number } | { type: 'decrement', value: number } | { type: 'reset', value: number } | {type: 'increment2', value: number} | {type: 'decrement2', value: number};
const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state, firstCounter: state.firstCounter + action.value
      };
    case "decrement":
      return {
        ...state, firstCounter: state.firstCounter - action.value
      };
      case "increment2":
      return {
        ...state, secondCount: state.secondCount + action.value
      };
    case "decrement2":
      return {
        ...state, secondCount: state.secondCount - action.value
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter1</h1>
      <div>
        <h2>Count  {count.firstCounter}</h2>
        <h2>Count  {count.secondCount}</h2>
      </div>
      <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
      <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement' , value: 1})}>Decrement</button>
      <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment 2 Count</button>
      <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement 2 Count</button>
      <button onClick={() => dispatch({type: 'reset', value: 1})}>Reset</button>
    </div>
  );
}

export default Counter2;
