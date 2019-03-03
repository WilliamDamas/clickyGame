import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Clicky Game: super
      </a>
      <span className="navbar-text">{props.text}</span>
      <span className="navbar-text">
        Score: {props.score} | Top Score: {props.topScore}
      </span>
    </nav>
  );
}

export default Navbar;
