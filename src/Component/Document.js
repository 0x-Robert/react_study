// //함수형 컴포넌트
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// //클래스형 컴포넌트

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// const root = ReactDom.createRoot(document.getElementById('root'));
// const element = <Welcome name="Sara"/>;
// root.render(element);

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {}
//   componentWillUnmount() {}

//   render() {
//     return (
//       <div>
//         <h1>hello </h1>
//         <h2>it is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
