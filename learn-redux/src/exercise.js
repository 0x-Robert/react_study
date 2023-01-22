import {createStore} from "redux";

//createStore은 store를 만들어주는 함수입니다.
//리액트 프로젝트에서는 단 하나의 스토어를 만듭니다.
/* 리덕스에서 관리할 상태정의 */
const initialState = {
    counter:0,
    text:'',
    list:[]
};


/*액션 타입 정의 */
//액션 타입은 주로 대문자로 작성하기

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

//액션 생성함수 정의
//액션 생성함수는 주로 camelCase로 작성합니다. 
function increase(){
    return {
        type: INCREASE //액션 객체에는 type 값이 필수입니다. 
    }
}

// const increase = () => ({
//     return {
//         type : INCREASE 
//     }
// })

//화살표 함수로 작성하는 것이 더욱 코드가 간단하기때문에 다음과 같은 방식을 추천함
const decrease = () => ({
type : DECREASE
})

const changeText = text => ({
    type: CHANGE_TEXT, 
    text //액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있다. 
})

const addToList = item => 
({
    type: ADD_TO_LIST,
    item 
})

//리듀서 만들기 
//위 액션 생성함수들을 통해 만들어진 객체들을 참조하여 새로운 상태를 만들는 함수를 만들기
//주의 : 리듀서에서는 불변성을 꼭 지켜야함 

function reducer(state=initialState, action){
    //state의 초깃값을 initialState로 지정함
    switch(action.type){
        case INCREASE: 
        return {
            ...state,
            counter: state.counter + 1
        };
        case DECREASE:
        return {
            ...state, 
            counter: state.counter -1 
            };
        case CHANGE_TEXT: 
        return {
            ...state ,
            text: action.text 
        }
        case ADD_TO_LIST: 
        return {
            ...state,
            list: state.list.concat(action.item)
        };
        default: 
        return state; 
    }
}



//스토어 만들기
const store = createStore(reducer);

console.log(store.getState()); //현재 store 안에 들어있는 상태를 조회하기

// 스토어 안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);
//구독을 해제하고 싶을 때는 unsubscribe()을 호출하면 됩니다. 

//액션들을 디스패치 해봅시다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕 헬로"));
store.dispatch(addToList({id: 1, text: '와우'}));



// console.log('Hello!');



// 액션 타입을 문자열 상수로 정의하는 것의 이점

// 이름짓기 편리하다.
// 기존에 생성된 타입의 목록을 PR을 통해 모든 팀원에게 공유가 가능하다.
// type에 문자열을 직접 쓰고 오타를 내어도 아무런 일도 발생하지 않아서 에러 찾기가 어렵다.