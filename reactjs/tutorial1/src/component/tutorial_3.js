import { useState } from "react";

function Intro(props) {
  const [name, setSome] = useState(props.name);


  return <h1 onClick={
    ()=>setSome("Raj")}>My name is {name} </h1>;
}

export default Intro;


























  // const [name, setName] = useState(props.name);
