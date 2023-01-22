//리듀서를 합치는 작업은 combineRedcuers라는 리덕스에 내장되어있는 함수를 사용한다. 
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";


const rootReducer = combineReducers({
    counter, 
    todos 
});

export default rootReducer;

