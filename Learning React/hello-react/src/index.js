import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake() {
  return (
    <div>
      <h1>Visit Jenny Lake!</h1>
    </div>
  );
}

function SkiResort() {
  return (
    <div>
      <h1>Vist Jackson Hole Mountain Resort!</h1>
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
  if (props.season === "summer") {
    return <Lake />;
  }
  return <SkiResort />;
}

ReactDOM.render(
  //  <Hello library="React" message="Have fun!" number={3} />,
  <App season="summer" />,
  document.getElementById("root")
);
