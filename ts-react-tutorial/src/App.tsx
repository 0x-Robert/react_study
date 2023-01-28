import React from 'react';
// import ReducerSample from './ReducerSample';
// import Counter from "./Counter"
import MyForm from './MyForm';
import ReducerSample from './RdeucerSample';


const App: React.FC = () => {
 // return <ReducerSample />;
//return <Counter/>;

const onSubmit = (form: {name: string; description: string }) => {
  console.log(form);
}
// return <MyForm onSubmit={onSubmit}/>;
return <ReducerSample/>
};

export default App;