// import React, { useState } from "react";

// type ItemType = {
//   id: number;
//   value: number;
// }

// function Array() {
//   const [items, setItems] = useState<ItemType[]>([]);

//   const addNumber = () => {
//     setItems([
//       ...items,
//       {
//         id: items.length,
//         value: Math.floor(Math.random() * 10) + 1,
//       },
//     ]);
//   };
//   return (
//     <div>
//       <h1>Array</h1>
//       <button onClick={addNumber}>Add Number</button>
//       <ul>
//         {items.map((item: ItemType) => (
//           <li key={item.id}>{item.value}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Array;

// agr just array hota 
import React, { useState } from "react";


function Array() {
  const [items, setItems] = useState<string[]>([]);

  const addNumber = () => {
    setItems([...items, "Waqar"]);
  };
  return (
    <div>
      <h1>Array</h1>
      <button onClick={addNumber}>Add Number</button>
      <ul>
        {items.map((item: string) => (
          <li>{item}</li>
        ))}
      </ul>
      <h1>{JSON.stringify(items)}</h1>
    </div>
  );
}

export default Array;
