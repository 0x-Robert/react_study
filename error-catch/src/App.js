// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// // export default App;
// import React from "react";
// import User from "./User";
// import ErrorBoundary from "./ErrorBoundary";

// function App() {
//   const user = {
//     id: 1,
//     username: "velopert",
//   };
//   return (
//     <ErrorBoundary>
//       <User />
//     </ErrorBoundary>
//   );
// }

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <p>와우</p>
    </div>
  );
}

export default App;
