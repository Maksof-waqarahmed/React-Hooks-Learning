import React from "react";
import "./App.css";
//useState
import Counter from "./components/useState/counter";
// import Counter2 from "./components/useState/counter2";
import Object from "./components/useState/object";
import Array from "./components/useState/array";

//useEffect
import CounterEffect from "./components/useEffect/counter";
import Conditional from "./components/useEffect/conditionalCounter";
import OneMouse from "./components/useEffect/onceMouseEventRender";
import WillMount from "./components/useEffect/willMount";
import InternalCounter from "./components/useEffect/internalCounter";
import FetchData from "./components/useEffect/fetchData";
import FetchSingleData from "./components/useEffect/fetchSingleData";
import FetchDataButtonClick from "./components/useEffect/fetchDataButtonClick";

//useContext
import ComponentC from "./components/userContext/componentC";

import { createContext } from "react";
import Counter1 from "./components/userReducer/counter1";
import Counter2 from "./components/userReducer/counter2";
export const UserNameContext = createContext<string>("");
export const UserAgeContext = createContext<number>(0);
const App: React.FC = () => {
  return (
    <div className="App">
      {/* Use State */}
      {/* <Counter/> */}
      {/* <Counter2/> */}
      {/* <Object/> */}
      {/* <Array /> */}

      {/* Use Effect */}
      {/* <CounterEffect /> */}
      {/* <Conditional /> */}
      {/* <OneMouse /> */}
      {/* <WillMount /> */}
      {/* <InternalCounter /> */}
      {/* <FetchData /> */}
      {/* <FetchSingleData /> */}
      {/* <FetchDataButtonClick /> */}

      {/* use Context  */}
      {/* <UserNameContext.Provider value={"Waqar Rana"}>
        <UserAgeContext.Provider value={22}>
          <ComponentC />
        </UserAgeContext.Provider>
      </UserNameContext.Provider> */}

      {/* useReducer */}
      {/* <Counter1/> */}
      <Counter2/>
    </div>
  );
};

export default App;
