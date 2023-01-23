//액션타입, 액션 생성함수, 리듀서를 한 파일에 작성하는 Ducks 패턴을 사용하기
//원래는 counter/INCREASE 이런식으로 앞부분에 접두어를 두지만 이번에는 액션이름이 중복되는 일이 
//없으니 편의상 생략함 

//액션 타입 
const INCREASE = 'INCREASE'; 
const DECREASE = 'DECREASE';

//액션 생성 함수
export const increase = () => ({type: INCREASE})
export const decrease = () => ({type: DECREASE})



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

