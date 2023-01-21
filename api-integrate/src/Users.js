// import React from 'react';
// import axios from 'axios';
// import useAsync from './useAsync';

// // useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// // 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
// async function getUsers() {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/users'
//   );
//   return response.data;
// }

// function Users() {
//   const [state, refetch] = useAsync(getUsers, [], true);

//   const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

//   if (loading) return <div>로딩중..</div>;
//   if (error) return <div>에러가 발생했습니다</div>;
//   if (!users) return <button onClick={refetch}>불러오기</button>;
//   return (
//     <>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             {user.username} ({user.name})
//           </li>
//         ))}
//       </ul>
//       <button onClick={refetch}>다시 불러오기</button>
//     </>
//   );
// }

// export default Users;



//라이브러리 이용함
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useAsync } from 'react-async';
// import User from './User';

// // useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// // 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
// async function getUsers() {
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/users'
//   );
//   return response.data;
// }

// function Users() {
//   const [userId, setUserId] = useState(null);
//   const { data: users, error, isLoading, run } = useAsync({
//     deferFn: getUsers
//   });

//   if (isLoading) return <div>로딩중..</div>;
//   if (error) return <div>에러가 발생했습니다</div>;
//   if (!users) return <button onClick={run}>불러오기</button>;

//   return (
//     <>
//       <ul>
//         {users.map(user => (
//           <li
//             key={user.id}
//             onClick={() => setUserId(user.id)}
//             style={{ cursor: 'pointer' }}
//           >
//             {user.username} ({user.name})
//           </li>
//         ))}
//       </ul>
//       <button onClick={run}>다시 불러오기</button>
//       {userId && <User id={userId} />}
//     </>
//   );
// }

// export default Users;




// import React from 'react';
// import axios from 'axios';
// import useAsync from './useAsync';


// // useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// // 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
// async function getUsers(){
//   const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/users'
//   );
//   return response.data; 
// }

// function Users(){
//   const[state, refetch] = useAsync(getUsers, []);

//   const{loading, data:users, error} = state; 

//   if(loading) return <div>로딩중..</div>
//   if(error) return <div>에러가 발생했습니다. </div>
//   if(!users) return null; 

//   return (
//     <>
//     <ul>
//       {users.map(user=>(
//         <li key={user.id}>
//           {user.username} ({user.name})
//         </li>
//       ))}
//     </ul>
//     <button onClick={refetch}>다시불러오기</button>
//     </>
//   )
// }

// export default Users;

import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import User from './User';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}

function Users() {
  const [userId, setUserId] = useState(null);
  const { data: users, error, isLoading, reload } = useAsync({
    promiseFn: getUsers
  });

  if (isLoading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={reload}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={reload}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

//라이브러리를 쓰려면 다음 이슈를 참고해야됨
//react 18 upgrade 버전에서 해당 라이브러리가 제대로 동작하지 않는 것 같습니다.
// 해당 라이브러리의 github의 issue를 확인해본 결과 react 프로젝트에서<React.StrictMode /> 를 제거하면 동작하는 것 같습니다.

export default Users;