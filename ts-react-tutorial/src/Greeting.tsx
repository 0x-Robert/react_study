import React from 'react';


type GreetingProps = {
    name: string;
    mark: string; 
    optional? : string;
    onClick: (name: string) => void; //아무것도 리턴하지 않는다는 함수를 의미함 
};



function Greetings({name, mark , optional, onClick }: GreetingProps ){    
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}

            <div>
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>    
    );
}



Greetings.defaultProps = {
    mark: "!"
};

export default Greetings; 

