import React, {useState} from  "react";

functionNameForm(){
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleClick = () => {
        alert(name);
    }

    return (
        <div className="App">
            <h1>Event handler practice</h1>
            <input type="text" value="name" onChange={handleChange}></input>
            <button onClick={handleClick}>button</button>
            <h2></h2>
        </div>
    )
}