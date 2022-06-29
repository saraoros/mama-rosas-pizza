import React from "react";

function Nav() {
  return (
    <header>
      <h2>
        <a href="/">Mama Rosas Pizza </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Us</a>
          </li>
          <li>
            <span> Contact </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
