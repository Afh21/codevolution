import React, { useEffect, useState } from 'react';
import { HookMouseEvent } from './HookMouseEvent';

function HookMouseContainer() {
   const [display, setDisplay] = useState(true);

   return (
      <div>
         <button onClick={() => setDisplay(!display)}>Toggle display</button>
         {display && <HookMouseEvent />}
      </div>
   );
}

export { HookMouseContainer };
