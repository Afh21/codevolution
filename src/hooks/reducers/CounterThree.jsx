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

// Multiples reducers
function CounterThree() {
   const [count, dispatch] = useReducer(reducer, initialState);
   const [countThree, dispatchTwo] = useReducer(reducer, initialState);

   return (
      <div>
         <div>Count {count}</div>
         <div>
            <button onClick={() => dispatch('INCREMENT')}>Increment</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
         </div>

         <br />
         <div>
            <div>Count {countThree}</div>
            <button onClick={() => dispatchTwo('INCREMENT')}>
               Increment x2
            </button>
            <button onClick={() => dispatchTwo('DECREMENT')}>
               Decrement x2
            </button>
            <button onClick={() => dispatchTwo('RESET')}>Reset</button>
         </div>
      </div>
   );
}

export default CounterThree;
