import React, { useState, useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { AuthContext } from "../context/authContext";
import logoMopartner from "/logo.png";

export default function Navbar({ setTheme }) {
  const { handleLogOut } = useContext(AuthContext);
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
    setTheme(!mode);
  };
  return (
    <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
      <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-primary-700 dark:bg-gray-800 border-none">
        <img className="px-4" src={logoMopartner} />
      </div>
      <div className="flex justify-end items-center h-14 bg-primary-700 dark:bg-gray-800 header-right">
        <ul className="flex items-center">
          <li>
            <button
              onClick={handleMode}
              aria-hidden="true"
              className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-gray-200 hover:bg-primary-600 dark:bg-gray-200 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
            >
              {mode ? <DarkModeIcon /> : <LightModeIcon />}
            </button>
          </li>
          <li>
            <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="flex items-center mr-4 hover:text-blue-100"
            >
              <span className="inline-flex mr-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </span>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
