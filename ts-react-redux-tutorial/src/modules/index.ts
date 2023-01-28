import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;


// 투두리스트를 위한 프리젠테이셔널 컴포넌트 준비하기
// TodoInsert: 새 항목을 등록하는 용도
// TodoItem: 할 일 정보을 보여주는 용도
// TodoList: 여러개의 TodoItem 을 렌더링하는 용도
