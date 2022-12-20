import React, { useState } from "react";

export default function ParentComponent() {
  const [value, setValue] = useState("날 바꿔줘!");

  const handleChangeValue = () => {
    setValue("보여줄게 완전히 달라진 값");
  };

  return (
    <div>
      <div>값은 {value} 입니다</div>
      <ChildComponent handleButtonClick={handleChangeValue} />
    </div>
  );
}

function ChildComponent({ handleButtonClick }) {
  const handleClick = () => {
    // 이 버튼을 눌러서 부모의 상태를 바꿀 순 없을까?
    handleButtonClick("넘겨줄게 자식이 원하는 값 testtest");
  };

  return <button onClick={handleClick}>값 변경</button>;
}
