import React from 'react';
import './App.css';
//useState
import Counter from './components/useState/counter';
import Counter2 from './components/useState/counter2';
import Object from './components/useState/object';
import Array from './components/useState/array';

//useEffect
import CounterEffect from './components/useEffect/counter';
import Conditional from './components/useEffect/conditionalCounter';
import OneMouse from './components/useEffect/onceMouseEventRender';
import WillMount from './components/useEffect/willMount';
import InternalCounter from './components/useEffect/internalCounter';
import FetchData from './components/useEffect/fetchData';

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
      <FetchData />

    </div>
  );
}

export default App;
