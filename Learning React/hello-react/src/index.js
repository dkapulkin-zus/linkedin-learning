import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const gh_user_detail_url = "https://api.github.com/users/";

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${gh_user_detail_url}${login}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  });

  if (data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100} alt="" />
      </div>
    );
  }
  return null;
}
function App() {
  return <GitHubUser login="dkapulkin-zus" />;
}

ReactDOM.render(<App />, document.getElementById("root"));
