import { useState } from "react";

function Intro(props) {
  const [name, setName] = useState("Joseph");
  return <h1 onClick={()=>setName("Raj")}>My name is {name} </h1>;
}

export default Intro;


























  // const [name, setName] = useState(props.name);
