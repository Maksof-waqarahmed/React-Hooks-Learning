import React, {useState, useEffect} from 'react'

function OneMouse() {
    const[x, setX] = useState<number>(0);
    const[y, setY] = useState<number>(0);

    const logMousePosition = (e: any) => {
        console.log("Mouse Event");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("UseEffect Called");
        window.addEventListener('mousemove', logMousePosition);

        return () => {
          console.log("Component CleanUp");
          window.removeEventListener('mousemove', logMousePosition) //use in will mount component
        }
    }, [])
  return (
    <div>
        <h1>Did Mount</h1>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default OneMouse