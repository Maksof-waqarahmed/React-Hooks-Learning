import React, {useEffect, useState} from 'react'

function Conditional() {
    const [count, setCount] = useState<number>(0)
    const [name, setName] = useState<string>('');
    
    // is k ander ap paramater dety ho jo function hota h jo har render par execute hoga
    useEffect(() => {
        console.log("Title Updating");
        document.title = `You Clicked ${count} times`
    }, [count])
  return (
    <div>
        <h1>Counter</h1>
        <input type='text' value={name} onChange={(e: any) => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>

    </div>
  )
}

export default Conditional