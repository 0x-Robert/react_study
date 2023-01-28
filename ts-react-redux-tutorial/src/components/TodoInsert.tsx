import React, { ChangeEvent, FormEvent, useState } from 'react';

//onInsert 라는 props 를 받아와서 이 함수를 호출하여 새 항목을 추가하며, input 의 상태는 컴포넌트 내부에서 로컬 상태로 관리


type TodoInsertProps = {
  onInsert: (text: string) => void;
};

function TodoInsert({ onInsert }: TodoInsertProps) {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;