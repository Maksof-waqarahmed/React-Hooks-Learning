import React, { useState } from 'react'

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0)
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}

export default Counter