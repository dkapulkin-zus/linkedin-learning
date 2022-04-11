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

function Lake({ name }) {
  return <h1>{name}</h1>;
}

const lakeList = [
  { id: "1", name: "Echo", trailhead: "Echo" },
  { id: "2", name: "Maud", trailhead: "Wrights" },
  { id: "3", name: "Velma", trailhead: "Bayview" },
];

function App({ lakes }) {
  return (
    // map acts as a sort of foreach
    <div>
      {lakes.map((lake) => (
        <div>
          <h2>{lake.name}</h2>
          <p> Accessed by: {lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(
  //  <Hello library="React" message="Have fun!" number={3} />,
  <App lakes={lakeList} />,
  document.getElementById("root")
);
