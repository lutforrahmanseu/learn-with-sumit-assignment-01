import React from "react";

export default function Logo({logo, className}) {
  return (
    <div>
      <div href="index.html" className="navbar-logo block w-60 max-w-full px-4">
        <img
          src={logo}
          alt="logo"
          className={`${className}`}
        />
      </div>
    </div>
  );
}
