import React from "react"
import ReactDOM from "react-dom"
let root = document.getElementById("root");



let name1 = "Virat 678";

// Create Element Using createElement
let Element1 = React.createElement('h1', null, 'Hello World');
let Element2 = React.createElement('h1', { className: 'something' }, `Hello ${name1}`);


// Create Element Using JSX
let Element3 = <h1>Hello New World</h1>;


// Create Element Using JSX with dynamic data
let Element4 = <h1>Hey {name1}</h1>;


//Class Component
class Element6 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name1}!!!</h1>;
  }
}


//Function Component
function Element5(props) {
  return <h1>Hello {props.name1}!!</h1>;
};



// ReactDOM.render(Element1, document.getElementById("root"));
// ReactDOM.render(Element2, document.getElementById("root"));
// ReactDOM.render(Element3, document.getElementById("root"));
// ReactDOM.render(Element4, document.getElementById("root"));
// ReactDOM.render(<Element5 name1={name1} />, root)
// ReactDOM.render(<Element6 name1={name1} />, root)
