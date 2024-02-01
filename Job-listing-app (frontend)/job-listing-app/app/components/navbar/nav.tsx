import React from "react";

function NavBar() {
  return (
    <div className="h-28 flex items-center justify-between w-full text-white">
      <div className="pl-20 h-10 items-center w-40">
        <a href="/">
          <img src="../logo.png" alt="" />
        </a>
      </div>
      <div className="mr-20">
        <ul className="flex items-center space-x-6">
          <li>
            <a href="/dashboard" className="text-white hover:underline">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/create" className="text-white hover:underline">
              Create Post
            </a>
          </li>
          <li>
            <a href="/signup" className="text-white hover:underline">
              <i className="fa-solid fa-user-plus"></i> Register
            </a>
          </li>
          <li>
            <a href="/signin" className="text-white hover:underline">
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
