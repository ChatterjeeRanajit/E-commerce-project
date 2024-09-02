import React, { useState } from 'react';
function Counter() {
   const [counter, setCounter] = useState(0);
   function quant(){
    return counter;
   }
   return (
      <div className='counter-container'>
         <button onClick={() => setCounter(counter + 1)}>Increment</button>
         <button onClick={() => setCounter(counter - 1)}>Decrement</button>
         Quantity: <p id="quantity">{counter}</p>
      </div>
   );
}
export default Counter;