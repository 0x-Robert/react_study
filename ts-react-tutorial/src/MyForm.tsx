import React, {useState} from 'react';


type MyformProps = {
  onSubmit: (form: {name: string; description: string}) => void; 
};

function MyForm({onSubmit}: MyformProps){
  const [form, setForm]  = useState({
    name: "",
    description: ""
  });


const {name, description} = form; 

const onChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
  //e 값을 무엇으로? 모르면 any로 
  const {name, value} = e.target; 
  setForm({
    ...form,
    [name]:value 
  });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
  //여기도 any
  e.preventDefault();
  onSubmit(form);
  setForm({
    name:"",
    description:''
  });

};


return (
  <form onSubmit={handleSubmit}>
    <input name="name" value={name} onChange={onChange}/>
    <input name="description" value={description} onChange={onChange}/>
    <button type="submit">등록</button>
  </form>
);
}

export default MyForm; 