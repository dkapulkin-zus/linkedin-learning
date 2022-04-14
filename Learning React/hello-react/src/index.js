import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CheckBox() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}
function App(props) {
  const [year, setYear] = useState(2050);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");
  return (
    <>
      <div>
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>New Year</button>
      </div>
      <div>
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager("Rachel")}>Change Manager</button>
      </div>
      <div>
        <h1>Status: {status}</h1>

        <button onClick={() => setStatus("Closed")}>Closed</button>
        <button onClick={() => setStatus("Open")}>Open</button>
        <button onClick={() => setStatus("Back in 5")}>Break</button>
      </div>
    </>
  );
}

ReactDOM.render(<CheckBox />, document.getElementById("root"));
