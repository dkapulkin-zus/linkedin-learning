import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake({ name }) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function SkiResort({ name }) {
  return (
    <div>
      <h1> Visit {name}!</h1>
    </div>
  );
}

const lakeList = [
  { id: "1", name: "Echo", trailhead: "Echo" },
  { id: "2", name: "Maud", trailhead: "Wrights" },
  { id: "3", name: "Velma", trailhead: "Bayview" },
];

// basic conditional rendering
function App(props) {
  return (
    <div>
      {props.season === "summer" ? (
        <Lake name="Jenny Lake" />
      ) : props.season === "winter" ? (
        <SkiResort name="JHMR" />
      ) : (
        <h1>Come back in the winter or summer!</h1>
      )}
    </div>
  );
}

ReactDOM.render(
  //  <Hello library="React" message="Have fun!" number={3} />,
  <App season="foo" />,
  document.getElementById("root")
);
