import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
// 글로벌 스타일을 추가하고 싶을 땐 createGlobalStyle 이라는 것을 사용합니다. 이 함수를 사용하면 컴포넌트가 만들어지는데, 이 컴포넌트를 렌더링하면 됩니다.
const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead></TodoHead>
      </TodoTemplate>
    </>
  );
}

export default App;
