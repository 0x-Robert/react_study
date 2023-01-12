import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useReducer,
} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";

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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => user.id !== action.id),
      };
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
