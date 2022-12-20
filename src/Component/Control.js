import React, { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div className="App">
      <div>{username}</div>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="여기는 인풋입니다."
        className="tweetForm__input--username"
      ></input>
      <div>{msg}</div>
      {/* TODO : 위 input과 같이 입력에 따라서 msg state가 변할 수 있게 
      아래 textarea를 변경하세요. */}
      <textarea
        placeholder="여기는 텍스트 영역입니다."
        className="tweetForm__input--message"
        onChange={(event) => {
          setMsg(event.target.value);
        }}
        value={msg}
      ></textarea>
    </div>
  );
}
