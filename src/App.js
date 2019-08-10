import React from 'react';
import './App.css';
import { HookMouseContainer } from './hooks/HookMouseContainer';
// import { HookMouseEvent } from './hooks/HookMouseEvent';
// import HookEfectCounterOne from "./hooks/HookEfectCounterOne";
// import { HookCounter4 } from "./hooks/HookCounter4";
// import { HookCounter } from "./hooks/HookCounter";
// import { HookCounterTwo } from "./hooks/HookCounterTwo";
// import { HookCounte3 } from "./hooks/HookCounte3";

function App() {
   return (
      <div className="App">
         {/* <HookCounter />{" "} */}
         {/* <HookCounterTwo /> */}
         {/* <HookCounte3 /> */}
         {/* <HookCounter4 /> */}
         {/* <HookEfectCounterOne /> */}
         {/* <HookMouseEvent /> */}
         <HookMouseContainer />
      </div>
   );
}

export default App;
