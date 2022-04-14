import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  // second arg is the dependency array, i.e. only useEffect on the following element changes
  useEffect(() => {
    console.log(`field 1: ${val}`);
  }, [val]);

  useEffect(() => {
    console.log(`field 2: ${val2}`);
  }, [val2]);

  return (
    <>
      <label>
        Favorite Phrase:
        <input value={val} onChange={(e) => setVal(e.target.value)} />
      </label>
      <br />
      <label>
        Second Favorite Phrase:
        <input value={val2} onChange={(e) => setVal2(e.target.value)} />
      </label>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
