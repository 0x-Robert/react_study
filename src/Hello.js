import React, { Component } from "react";

// function Hello(props) {
//   return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>;
// }

// function Hello({ color, name, isSpecial }) {
//   return (
//     <div style={{ color }}>
//       {isSpecial ? <b>*</b> : null}
//       안녕하세요 {name}
//     </div>
//   );
// }

// Hello.defaultProps = {
//   name: "이름없음",
// };

// export default Hello;

class Hello extends Component {
  //클래스형 컴포넌트에는 render가 꼭 있어야함 
  // 이 메서드에서 렌더링 하고 싶은 JSX를 반환하면 됨 
  render() {
    const { color, name, isSpecial } = this.props;

    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
