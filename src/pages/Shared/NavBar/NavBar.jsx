import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/contest">Contest</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className="">Pages</summary>
          <ul className="p-2">
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/committee">Committee</Link></li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

    </>
  );

  return (
    <div className="bg-[#FFFFFF]">
      <div className="navbar max-w-screen-xl mx-auto  text-[#545454]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>

          <Link to='/' className="btn btn-ghost normal-case text-xl"><img src="https://codeboxr.net/themedemo/unialumni/html/assets/images/logo/logo.svg" alt="" /></Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
