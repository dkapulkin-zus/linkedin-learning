import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Checkbox() {
  const [checked, toggle] = useReducer(
    (checked) => !checked, // function to be performed by Reducer
    false // initial state
  );

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "unchecked"}
    </>
  );
}
function App() {
  return <Checkbox />;
}

ReactDOM.render(<App />, document.getElementById("root"));
