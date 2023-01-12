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
