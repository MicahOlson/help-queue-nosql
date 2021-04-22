import React from "react";
import devOopsImage from "./../img/dev-oops.png";

function Header() {
  return (
    <React.Fragment>
      <img src={devOopsImage} alt="It's a dumpster fire"/>
      <h1 id="heading">Help Queue</h1>
    </React.Fragment>
  );
}

export default Header;
