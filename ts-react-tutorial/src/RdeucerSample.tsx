// // import userEvent from '@testing-library/user-event';
// // import React, {useReducer} from 'react';

// // type Color = 'red' | 'orange' | 'yellow';


// // type State = {
// //   count: number;
// //   text: string;
// //   color: Color;
// //   isGood: boolean;
// // }

// // type Action= 
// // | {type: "SET_COUNT"; count: number}
// // | {type: "SET_TEXT"; text: string}
// // | {type: "SET_COLOR"; color: Color}
// // | {type: "TOGGLE_GOOD"};


// // function reducer(state: State, action: Action): State{
// //   switch (action.type){
// //     case "SET_COUNT": 
// //       return {
// //         ...state, 
// //         count: action.count //count가 자동완성, number 타입인 것을 알수있음 

// //       }
// //     case "SET_TEXT":
// //       return {
// //         ...state,
// //         text: action.text // text가 자동완성, string 타입임 
// //       }
// //     case "TOGGLE_GOOD":
// //       return {
// //         ...state,
// //         isGood: !state.isGood 
// //       };
// //     default:
// //       throw new Error("Unhandled action");
// //   }
// // }


// // function ReducerSample(){
// //   const [state, dispatch] = useReducer(reducer, {
// //     count: 0,
// //     text: "hello",
// //     color: "red",
// //     isGood: true 
// //   });


// //   const setCount = () => dispatch({type: "SET_COUNT", count: 5}); //count가 없으면 에러 발생
// //   const setText = () => dispatch({type: "SET_TEXT", text: "bye"}); //text를 넣지 않으면 에러 발생
// //   const setColor = () => dispatch({type: "SET_COLOR", color: "orange"});  //orange를 넣지않으면 에러발생
// //   const toggleGood = () => dispatch({type: "TOGGLE_GOOD"});

// //   return(
// //     <div>
// //       <p>
// //         <code>count: </code> {state.count}
// //       </p>
// //       <p>
// //         <code>text: </code> {state.text}
// //       </p>
// //       <p>
// //         <code>color: </code> {state.color}
// //       </p>
// //       <p>
// //         <code>isGood: </code> {state.isGood}
// //       </p>

// // <div>
// //   <button onClick={setCount}>SET_COUNT</button>
// //   <button onClick={setText}>SET_TEXT</button>
// //   <button onClick={setColor}>SET_COLOR</button>
// //   <button onClick={toggleGood}>TOGGLE_GOOD</button>
// // </div>

// //     </div>
// //   )
// // }

// // export default ReducerSample;

// import React, { useReducer } from 'react';

// type Color = 'red' | 'orange' | 'yellow';

// type State = {
//   count: number;
//   text: string;
//   color: Color;
//   isGood: boolean;
// };

// type Action =
//   | { type: 'SET_COUNT'; count: number }
//   | { type: 'SET_TEXT'; text: string }
//   | { type: 'SET_COLOR'; color: Color }
//   | { type: 'TOGGLE_GOOD' };

// function reducer(state: State, action: Action): State {
//   switch (action.type) {
//     case 'SET_COUNT':
//       return {
//         ...state,
//         count: action.count // count가 자동완성되며, number 타입인걸 알 수 있습니다.
//       };
//     case 'SET_TEXT':
//       return {
//         ...state,
//         text: action.text // text가 자동완성되며, string 타입인걸 알 수 있습니다.
//       };
//     case 'SET_COLOR':
//       return {
//         ...state,
//         color: action.color // color 가 자동완성되며 color 가 Color 타입인걸 알 수 있습니다.
//       };
//     case 'TOGGLE_GOOD':
//       return {
//         ...state,
//         isGood: !state.isGood
//       };
//     default:
//       throw new Error('Unhandled action');
//   }
// }

// function ReducerSample() {
//   const [state, dispatch] = useReducer(reducer, {
//     count: 0,
//     text: 'hello',
//     color: 'red',
//     isGood: true
//   });

//   const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 }); // count 를 넣지 않으면 에러발생
//   const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' }); // text 를 넣지 않으면 에러 발생
//   const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' }); // orange 를 넣지 않으면 에러 발생
//   const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

//   return (
//     <div>
//       <p>
//         <code>count: </code> {state.count}
//       </p>
//       <p>
//         <code>text: </code> {state.text}
//       </p>
//       <p>
//         <code>color: </code> {state.color}
//       </p>
//       <p>
//         <code>isGood: </code> {state.isGood ? 'true' : 'false'}
//       </p>
//       <div>
//         <button onClick={setCount}>SET_COUNT</button>
//         <button onClick={setText}>SET_TEXT</button>
//         <button onClick={setColor}>SET_COLOR</button>
//         <button onClick={toggleGood}>TOGGLE_GOOD</button>
//       </div>
//     </div>
//   );
// }

// export default ReducerSample;

import React from 'react';
import { useSampleState, useSampleDispatch } from './SampleContext';

function ReducerSample() {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 }); // count 를 넣지 않으면 에러발생
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' }); // text 를 넣지 않으면 에러 발생
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' }); // orange 를 넣지 않으면 에러 발생
  const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? 'true' : 'false'}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}

export default ReducerSample;