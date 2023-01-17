import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useReducer,
} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

import produce from "immer";

function countActiveUsers(users) {
  console.log("활성 사용자 세기");
  return users.filter((user) => user.active).length;
}

const initialState = {
  //   inputs: {
  //     username: "",
  //     email: "",
  //   },
  user: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@google.com",
      active: false,
    },
  ],
};

//immer의 사용법을 배우려고 다음코드를 변경한 것임
function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, (draft) => {
        //users: state.users.concat(action.user),
        draft.users.push(action.user);
      });
    case "TOGGLE_USER":
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
        //users: state.users.map((user) =>
        // user.id === action.id ? { ...user, active: !user.active } : user
      });

    case "REMOVE_USER":
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
        //users: state.users.filter((user) => user.id !== action.id),
      });
    default:
      return state;
  }
}

//Context API를 사용하면 프로젝트의 상태를 전역적으로 관리할 수 있다.
//아래 createContext의 파라미터에는 Context의 기본값을 설정할 수 있음
//UserDispatch라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type: "CREATE_USER",
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email,
  //     },
  //   });
  //   onReset();
  //   nextId.current += 1;
  // }, [username, email, onReset]);

  // const onToggle = useCallback((id) => {
  //   dispatch({
  //     type: "TOGGLE_USER",
  //     id,
  //   });
  // }, []);

  // const onRemove = useCallback((id) => {
  //   dispatch({
  //     type: "REMOVE_USER",
  //     id,
  //   });
  // }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  //Immer 은 분명히 정말 편한 라이브러리인것은 사실입니다. 하지만, 확실히 알아둘 점은, 성능적으로는 Immer 를 사용하지 않은 코드가 조금 더 빠르다는 점 입니다.
  
  return (
    <>
      {/* Context를 만들면 Context안에 Provider라는 컴포넌트가 들어있는데 이 컴포넌트를 통하여 Context의 값을 정할 수 있다.  이 컴포넌트를 사용할 떄 value를 사용하면 됨  */}
      <UserDispatch.Provider value={dispatch}>
        <CreateUser
        // username={username}
        // email={email}
        // onChange={onChange}
        // onCreate={onCreate}
        />
        <UserList users={users} />
        <div>활성사용자 수 : {count}</div>
      </UserDispatch.Provider>
    </>
  );
}

export default App;
