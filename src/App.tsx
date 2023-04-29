import { useContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";

import "react-horizontal-scrolling-menu/dist/styles.css";
import Sigin from "./auth/Sigin";
import { AuthContext } from "./context/authContext";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Rentals from "./pages/Rentals";
import axios from "axios";

function App() {
  const { status, userId, handleLogOut, displayName, email, photoURL } =
    useContext(AuthContext);
  const [theme, setTheme] = useState(false);
  const [pages, setPages] = useState("dashboard");
  const [auth, setAuth] = useState<any>(status);
  const [user, setUser] = useState<any>(userId);
  const [verifyDocument, setVerifyDocument] = useState(true);
  const [dataPartner, setDataPartner] = useState<any>({});
  const getDataPartner = async () => {
    await axios
      .get(`https://api.berusaha.live/mopartner/${userId}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        // handle success
        // console.log(response.data);
        if (response.data === null) {
          // console.log(response.data);
          setVerifyDocument(true);
        } else {
          setDataPartner(response.data);
          setVerifyDocument(false);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getDataPartner();
    setAuth(status);
    setUser(userId);
  }, [status]);
  return (
    <div
      className={
        theme
          ? 'climport { useState } from "react";assName="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'
          : 'className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white dark'
      }
    >
      {auth === "authenticated" && user !== null ? (
        <>
          <Navbar setTheme={setTheme} />
          <Sidebar setPages={setPages} />
          {verifyDocument ? (
            <>
              <div className="ml-14 mt-1 md:ml-64 pt-16 px-5">
                <div
                  className="text-gray-50 bg-fanta border border-fanta px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Hello {displayName} ! </strong>
                  <span className="block sm:inline">
                    unlock More features, complete your business profile !
                  </span>
                </div>
              </div>
              <Profile data={dataPartner} />
            </>
          ) : (
            <>
              {pages === "dashboard" && <Dashboard data={dataPartner} />}
              {pages === "rentals" && <Rentals data={dataPartner} />}
              {pages === "profile" && <Profile data={dataPartner} />}
            </>
          )}
        </>
      ) : (
        <Sigin />
      )}
    </div>
  );
}

export default App;
