import React, { useState } from "react";

function SelectExample() {
  const [choice, setChoice] = useState("apple");

  const fruits = ["apple", "orange", "pineapple", "strawberry", "grape"];
  const options = fruits.map((fruit) => {
    return <option value={fruit}>{fruit}</option>;
  });
  console.log(choice);
  const handleFruit = (event) => {
    //TODO : select tag 가 정상적으로 작동하도록 코드를 완성하세요.
    console.log(event.target.value);
    setChoice(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={handleFruit}>{options}</select>
      <h3>You choose "{choice}"</h3>
    </div>
  );
}

export default SelectExample;
