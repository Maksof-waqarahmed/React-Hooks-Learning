import React, {useState} from 'react'
import OneMouse from './onceMouseEventRender';

function WillMount() {
    const [toggle, setToggle] = useState<boolean>(true);

    //jb hum cha hry h k unmount hony k bd us sy related sy chezy cleanup ho jayw to hum useeffct ka callback return krta h cleanup function jp k humny likhna hota h 
  return (
    <div>
        <h1>WillMount</h1>

        <button onClick={() => setToggle(!toggle)}>Toggle Component</button>

        {toggle && <OneMouse/>}
    </div>
  )
}

export default WillMount