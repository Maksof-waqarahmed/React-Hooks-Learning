import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

function Counter2() {
  const [count, setCount] = useState<number>(0);
  const incrementFive = () => {
    // setCount(count + 5);
    for (let i = 1; i <= 5; i++) {
      // setCount(count + 1) asy nh kr skty ncz set Count imemdiately update nh hota
      setCount((preCount) => preCount + 1);
    }
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : "")}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={incrementFive}>Increment by 5</button>
    </div>
  );
}

export default Counter2;
