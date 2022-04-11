import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// instead of passing in props object, could just make these regular params
// which would remove the need for "props." syntasx
function Hello(props) {
  console.log(Object.keys(props));
  return (
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p>{props.message}</p>
      <p>{Object.keys(props).length} Props Total</p>
    </div>
  );
}

ReactDOM.render(
  <Hello library="React" message="Have fun!" number={3} />,
  document.getElementById("root")
);
