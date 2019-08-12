import React, { useState, useEffect } from 'react';

function HookIntervalCounter() {
   const [count, setCount] = useState(0);

   const tick = _ => setCount(prevCount => prevCount + 1);
   // const tick = _ => setCount(count + 1);

   useEffect(() => {
      const interval = setInterval(tick, 1000);
      return () => {
         clearInterval(interval);
      };
   }, []);

   return <div>{count}</div>;
}

export default HookIntervalCounter;
