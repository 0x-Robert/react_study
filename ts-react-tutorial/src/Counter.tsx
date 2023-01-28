// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState<number>(0);
//   const onIncrease = () => setCount(count + 1);
//   const onDecrease = () => setCount(count - 1);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <div>
//         <button onClick={onIncrease}>+1</button>
//         <button onClick={onDecrease}>-1</button>
//       </div>
//     </div>
//   );
// }

// export default Counter;


//useRedcuer를 활용한 couter 
import React, {useReducer} from "react";

type Action = {type : "INCREASE"} | {type: "DECREASE"}; //이렇게 액션을 |로 연달아서 나열하기

function reducer(state: number, action:Action): number{
  switch(action.type){
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1; 
    default:
      throw new Error("Unhandled action");
  }
}

function Counter(){
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({type: "INCREASE"});
  const onDecrease = () => dispatch({type: "DECREASE"});

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter; 

