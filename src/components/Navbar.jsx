import React from "react";
import Logo from "./Logo";
import MenuLink from "./MenuLink";
import logo from "../assets/images/logo/logo.svg";

export default function Navbar({ scrolling }) {
  return (
    <div>
      <div
        className={`fixed left-0 top-0 z-40 w-full flex items-center ${
          scrolling ? "bg-orange-700 shadow-md" : "bg-transparent"
        }`}
        style={{ transition: 'background-color 0.3s ease' }}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-full items-center justify-between px-4 py-3">
              <Logo
                logo={logo}
                className="header-logo navbar-logo block w-60 max-w-full px-4 h-12"
              />
              <MenuLink />
              <div className="sm:flex">
                <a
                  href="#"
                  className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
