import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";

import LogoMopartner from "../../public/logo.png";

export default function Sigin() {
  const {
    status,
    userId,
    handleLogOut,
    displayName,
    email,
    photoURL,
    handleLoginWithGoogle,
  } = useContext(AuthContext);

  return (
    <div className="grid h-screen w-screen place-items-center bg-slate-800 px-4 text-sm font-medium">
      <div className="w-full max-w-sm rounded-tl-3xl bg-primary-700 shadow">
        <div className="p-4 md:p-5 lg:p-6">
          <img
            src={LogoMopartner}
            className="-translate-y-6 -translate-x-2 w-4/3 py-5 items-center"
            alt=""
          />
          <div className="grid gap-y-3">
            <button
              className="text-gray-50 font-bold bg-primary-500 flex items-center justify-center gap-x-2 rounded-md border border-primary-600 bg-slate-700 py-3 px-4 transition hover:text-bermuda"
              onClick={handleLoginWithGoogle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                  fill="#cbd5e1"
                ></path>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
      <p className="font-semibold text-gray-800">From Mosfitech</p>
    </div>
  );
}
