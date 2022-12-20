import React, { useState } from "react";

function NameForm() {
  const [name, setname] = useState("");

  const handleChange = (e) => {
    setname(e.target.value);
    console.log("e", e);
    console.log("e ", e.target.height);
  };

  const handleClick = () => {
    alert(name);
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleChange}></input>
      <button onClick={handleClick}>Button</button>
      <h1>{name}</h1>
    </div>
  );
}

export default NameForm;
