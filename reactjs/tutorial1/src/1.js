import React, { useState } from "react"
import ReactDOM from "react-dom"
let root = document.getElementById("root");




// ReactDOM.render(Element1, document.getElementById("root"));
// ReactDOM.render(Element2, document.getElementById("root"));
// ReactDOM.render(Element3, document.getElementById("root"));
// ReactDOM.render(Element4, document.getElementById("root"));
// ReactDOM.render(<Element5 name1={name1} />, root)
// ReactDOM.render(<Element6 name1={name1} />, root)


function MyForm() {
  const [name, setName] = useState("444");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.value)}
        />
      </label>
    </form>
  )
}

ReactDOM.render(<MyForm />, root);