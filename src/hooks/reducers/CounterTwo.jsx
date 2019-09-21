import React, { useReducer } from 'react';

const initialState = {
   firstCounter: 0,
   secondCounter: 10
};

const reducer = (state, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return { ...state, firstCounter: state.firstCounter + action.value };

      case 'INCREMENT2':
         return { ...state, secondCounter: state.secondCounter + action.value };

      case 'DECREMENT':
         return {
            ...state,
            firstCounter:
               state.firstCounter > 0 ? state.firstCounter - action.value : 0
         };

      case 'DECREMENT2':
         return {
            ...state,
            secondCounter:
               state.secondCounter > 0 ? state.secondCounter - action.value : 0
         };

      case 'RESET':
         return { ...state, firstCounter: 0, secondCounter: 10 };

      default:
         return state;
   }
};

function CounterTwo() {
   const [count, dispatch] = useReducer(reducer, initialState);

   return (
      <div>
         <br />
         <div>
            Count #1 &nbsp; &nbsp; "{count.firstCounter}"
            &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp; Count #2 &nbsp;&nbsp;"
            {count.secondCounter}"
         </div>
         <br />
         <div>
            <button onClick={() => dispatch({ type: 'INCREMENT', value: 1 })}>
               Increment C1
            </button>
            <button
               disabled={count.firstCounter <= 0}
               onClick={() => dispatch({ type: 'DECREMENT', value: 1 })}
            >
               Decrement C1
            </button>

            <button onClick={() => dispatch({ type: 'INCREMENT', value: 5 })}>
               Increment x5
            </button>

            <button
               disabled={count.firstCounter <= 0}
               onClick={() => dispatch({ type: 'DECREMENT', value: 5 })}
            >
               Decrement x5
            </button>
         </div>

         <div>
            <button onClick={() => dispatch({ type: 'INCREMENT2', value: 1 })}>
               Increment C2
            </button>
            <button
               disabled={count.secondCounter <= 0}
               onClick={() => dispatch({ type: 'DECREMENT2', value: 1 })}
            >
               Decrement C2
            </button>

            <button onClick={() => dispatch({ type: 'INCREMENT2', value: 5 })}>
               Increment x5
            </button>

            <button
               disabled={count.secondCounter <= 0}
               onClick={() => dispatch({ type: 'DECREMENT2', value: 5 })}
            >
               Decrement x5
            </button>
         </div>

         <button onClick={() => dispatch({ type: 'RESET' })}>Reset all</button>
      </div>
   );
}

export default CounterTwo;
