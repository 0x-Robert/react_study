import React from 'react';
import { useParams } from 'react-router-dom';


const profileData = {


    velopert:{
        name: "김민준",
        description: "Frontend Engineer test"
    },
    gildong:{
        name:"홍길동",
        description: "전래동화의 주인공"
    }
};

const Profile = ({match})=>{
    //파라미터를 받아올 때 match 안에 들어있는 params 값을 참조합니다.
    //const {username} = match.params;
    const {username} = useParams();
    console.log(username);
    const profile = profileData[username];
    if(!profile){
        return <div>존재하지 않는 유저입니다.</div>

    }
    return(
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile; 


// match 대신 사용

// import { useParams } from 'react-router-dom';
// ...
// const { username } = useParams();
// const profile = profileData[username];

