import React, { useState } from "react";

function SelectExample(props) {
  const [selectedValue, setSelectedValue] = useState(employs[0]);

  const employs = [
    "kimcoding",
    "parkhacker",
    "leedesign",
    "songfront",
    "choiback",
  ];
  const handleFilterInput = (event) => {
    let value = event.target.options;
    setSelectedValue(value);
    props.handleRegionSearch(value);
  };

  return (
    <div className="App">
      <select
        options={employs}
        onChange={handleFilterInput}
        value={selectedValue}
        placeholder="Select a name"
      />
    </div>
  );
}

export default SelectExample;
