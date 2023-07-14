import React from "react";
import ReactDOM from "react-dom";
import Comments from "./comment";
const Main = () => {
  return (
    <div>
      <Comments />
    </div>
  );
};

ReactDOM.render(<Main />, document.querySelector("#root"));
