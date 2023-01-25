//combineReducers가 리듀서들을 합쳐주는 역할을 함 
//슬라이스 리듀서 함수들로 이루어진 객체를 취하며, 동일한 키를 가진 상태 객체를 출력하는 함수를 만듭니다.

import {combineReducers} from 'redux';
import counter, { counterSaga } from "./counter";
import posts from "./posts";
import {all} from "redux-saga/effects";


const rootReducer = combineReducers({counter, posts});

export function* rootSaga(){
    yield all([counterSaga()]); //all은 배열 안의 여러 사가를 동시에 실행시켜줍니다. 
}

export default rootReducer;


