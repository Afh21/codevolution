import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
   switch (action) {
      case 'INCREMENT':
         return state + 1;

      case 'DECREMENT':
         return state > 0 ? state - 1 : initialState;

      case 'RESET':
         return initialState;

      default:
         return state;
   }
};

function CounterOne() {
   const [count, dispatch] = useReducer(reducer, initialState);

   return (
      <div>
         <div>Count {count}</div>
         <button onClick={() => dispatch('INCREMENT')}>Increment</button>
         <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
         <button onClick={() => dispatch('RESET')}>Reset</button>
      </div>
   );
}

export default CounterOne;
