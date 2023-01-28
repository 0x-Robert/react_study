// TodoItem 컴포넌트는 각 할 일 항목에 대한 정보를 보여주는 컴포넌트이며, 텍스트 영역을 클릭하면 done 값이 바뀌고, 
//우측의 (X) 를 클릭하면 항목이 삭제됩니다. 이 컴포넌트에서는 할 일 정보를 지니고 있는 todo, 그리고 상태 토글 및 삭제를 해주는 함수 onToggle 과 onRemove 를 props 로 받아옵니다.

import React, { CSSProperties } from 'react';
import { Todo } from '../modules/todos';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  // CSSProperties 는 style 객체의 타입입니다.
  const textStyle: CSSProperties = {
    textDecoration: todo.done ? 'line-through' : 'none'
  };
  const removeStyle: CSSProperties = {
    marginLeft: 8,
    color: 'red'
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <li>
      <span onClick={handleToggle} style={textStyle}>
        {todo.text}
      </span>
      <span onClick={handleRemove} style={removeStyle}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;