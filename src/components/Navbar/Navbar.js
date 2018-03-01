import React from "react";

const Navbar = () => (
  <header>
    <div className="wrapper">
      <h1>Bulletin Board</h1>
      <nav>
        <a href="/writesomething">Write</a>
        <a href="/readsomething">Read</a>
      </nav>
    </div>
  </header>
);

export default Navbar;
