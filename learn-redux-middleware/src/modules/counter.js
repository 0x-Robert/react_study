// //액션타입, 액션 생성함수, 리듀서를 한 파일에 작성하는 Ducks 패턴을 사용하기
// //원래는 counter/INCREASE 이런식으로 앞부분에 접두어를 두지만 이번에는 액션이름이 중복되는 일이 
// //없으니 편의상 생략함 

// //액션 타입 
// const INCREASE = 'INCREASE'; 
// const DECREASE = 'DECREASE';

// //액션 생성 함수
// export const increase = () => ({type: INCREASE})
// export const decrease = () => ({type: DECREASE})



// //초기값 상태가 객체가 아니라 그냥 숫자여도 됨
// const initialState = 0; 


// export default function counter(state = initialState, action){
//     switch(action.type){
//         case INCREASE: 
//             return state + 1;
//         case DECREASE: 
//             return state - 1;
//         default: 
//             return false;   
//     }
// }

//----------------------------------------------------------------

//getState를 쓰지 않는다면 굳이 파라미터로 받아올 필요는 없다. 
// export const increaseAsync = () => dispatch => {
//     setTimeout(()=>dispatch(increase()), 1000);
// };

// export const decreaseAsync = () => dispatch => {
//     setTimeout(()=> dispatch(decrease()), 1000);
// }
//----------------------------------------------------------------

import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

//액션타입, 액션 생성함수, 리듀서를 한 파일에 작성하는 Ducks 패턴을 사용하기
//원래는 counter/INCREASE 이런식으로 앞부분에 접두어를 두지만 이번에는 액션이름이 중복되는 일이 
//없으니 편의상 생략함 

//액션 타입 
const INCREASE = 'INCREASE'; 
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC'; 
const DECREASE_ASYNC = 'DECREASE_ASYNC';


//액션 생성 함수
export const increase = () => ({type: INCREASE})
export const decrease = () => ({type: DECREASE})
export const increaseAsync = () => ({ type: INCREASE_ASYNC })
export const decreaseAsync = () => ({ type: DECREASE_ASYNC })

function* inceraseSaga(){
    yield delay(1000);    //1초를 기다림
    yield put(increase()) //put은 특정액션을 디스패치 해줌 
}

function* deceraseSaga(){
    yield delay(1000);    //1초를 기다림
    yield put(decrease()) //put은 특정액션을 디스패치 해줌 
}

export function* counterSaga(){
    yield takeEvery(INCREASE_ASYNC, inceraseSaga); //모든 INCREASE_ASYNC 액션을 처리 
    yield takeLatest(DECREASE_ASYNC, deceraseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리 
}

//초기값 상태가 객체가 아니라 그냥 숫자여도 됨
const initialState = 0; 


export default function counter(state = initialState, action){
    switch(action.type){
        case INCREASE: 
            return state + 1;
        case DECREASE: 
            return state - 1;
        default: 
            return false;   
    }
}
