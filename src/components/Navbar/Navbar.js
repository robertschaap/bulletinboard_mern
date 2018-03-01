import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header>
    <div className="wrapper">
      <h1>Bulletin Board</h1>
      <nav>
        <Link to="writesomething">Write</Link>
        <Link to="readsomething">Read</Link>
      </nav>
    </div>
  </header>
);

export default Navbar;
