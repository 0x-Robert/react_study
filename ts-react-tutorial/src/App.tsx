// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
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

// export default App;
// import React from 'react';
// import Greetings from './Greeting';
// import Counter from './Counter';

// const App: React.FC = () => {
//     const onClick = (name:string ) => {
//         console.log(`${name} says hello`);
//     };
//     return <Counter />;
//     //return<Greetings name="React" onClick={onClick} />;
// }

// export default App;

// import React from 'react';
// import MyForm from './MyForm';

// const App: React.FC = () => {
//   const onSubmit = (form: { name: string; description: string }) => {
//     console.log(form);
//   };
//   return <MyForm onSubmit={onSubmit} />;
// };

// export default App;


import React from 'react';
import ReducerSample from './ReducerSample';

const App: React.FC = () => {
  return <ReducerSample />;
};

export default App;