import React, {useState, useEffect} from 'react'

function InternalCounter() {
    const [count, setCount] = useState<number>(0);

    const tick = () => {
        setCount(count + 1);
        // setCount(preCount => preCount + 1) age asy kry gy to humko dependency array me kuch likhnny ke need nh h
    }

    useEffect(() => {
        const timeInterval = setInterval(tick, 1000);

        return () => {
            clearInterval(timeInterval)
        }
    }, [count])
  return (
    <div>
        <h1>Internal Counter</h1>
        {count}
    </div>
  )
}

export default InternalCounter