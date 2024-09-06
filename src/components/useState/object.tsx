import React, {useState} from 'react'
import { json } from 'stream/consumers';

type objType = {
    firstName: string;
    lastName: string;
    age: string
}
function Object() {
    const [obj, setObj] = useState<objType>({firstName: '', lastName: '', age: ''});

  return (
    <div>
        <h1>Objects</h1>
        <form>
            <input type='text' value={obj.firstName} onChange={(e: any) => setObj({...obj, firstName: e.target.value})}/> <br/>
            <input type='text' value={obj.lastName} onChange={(e: any) => setObj({...obj, lastName: e.target.value})}/> <br/>
            <input type='number' value={obj.age} onChange={(e: any) => setObj(preObj => ({...preObj, age: e.target.value}))}/> <br/>
        </form>
        <h2>Your First Name is: {obj.firstName}</h2>
        <h2>Your Last Name is: {obj.lastName}</h2>
        <h2>Your Age Name is: {obj.age}</h2>

        {/* to check state management */}
        <h2>{JSON.stringify(obj)}</h2>
    </div>
  )
}

export default Object

// agr nested obj hota to asy krty 
// import React, { useState } from 'react';

// type objType = {
//   firstName: string;
//   lastName: string;
//   details: {
//     age: string;
//   };
// };

// function Object() {
//   const [obj, setObj] = useState<objType>({
//     firstName: '',
//     lastName: '',
//     details: {
//       age: ''
//     }
//   });

//   return (
//     <div>
//       {/* Input for firstName */}
//       <input
//         type="text"
//         value={obj.firstName}
//         onChange={(e) =>
//           setObj((prevObj) => ({
//             ...prevObj,
//             firstName: e.target.value
//           }))
//         }
//       />
//       <br />
      
//       {/* Input for age inside the nested details object */}
//       <input
//         type="text"
//         value={obj.details.age}
//         onChange={(e) =>
//           setObj((prevObj) => ({
//             ...prevObj, // Spread the outer object (obj)
//             details: {
//               ...prevObj.details, // Spread the nested object (details)
//               age: e.target.value // Update only the age field
//             }
//           }))
//         }
//       />
//     </div>
//   );
// }

// export default Object;
