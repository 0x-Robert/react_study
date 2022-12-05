import React from "react";
import Hello from "./Hello";
import Check from "./Check";
import Select from "./Select";
import NameForm from "./NameForm";
import Popup from "./Popup";
import Control from "./Control";
import Wrapper from "./Wrapper";
function App() {
  return (
    <div>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello />

      <Check />
      <Select />
      <NameForm />
      <Popup />
      <Control />
      <Wrapper>
        <Hello name="yongari" color="blue" />
      </Wrapper>
    </div>
  );
}

export default App;
