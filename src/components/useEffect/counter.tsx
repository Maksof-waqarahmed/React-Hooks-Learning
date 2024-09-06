import React, {useEffect, useState} from 'react'

function CounterEffect() {
    const [count, setCount] = useState<number>(0)
    
    // is k ander ap paramater dety ho jo function hota h jo har render par execute hoga
    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>

    </div>
  )
}

export default CounterEffect