import React, { useState } from "react";
import "./index.css";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (e) => {
    // Pop up 의 open/close 상태에 따라
    // 현재 state 가 업데이트 되도록 함수를 완성하세요.
    setShowPopup(!showPopup);
    console.log("test");
    console.log("e", e);
  };

  return (
    <div className="App">
      <h1>Fix me to open Pop Up</h1>
      {/* 버튼을 클릭했을 때 Pop up 의 open/close 가 작동하도록
          button tag를 완성하세요. */}
      <button className="open" onClick={togglePopup}>
        Open me
      </button>

      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <h2>Success!</h2>
            <button className="close" onClick={togglePopup}>
              Close me
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Popup;
