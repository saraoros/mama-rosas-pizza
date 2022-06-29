import React from "react";
import mrLogo from "../../assets/logo/mama-rosas-logo.jpeg";

function Nav() {
  return (
    <header>
      <h2>
        <img
          src={mrLogo}
          className="my-2"
          style={{ width: "23%" }}
          alt="Company Logo"
        />
        <a href="/">Mama Rosas Pizzeria</a>
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
