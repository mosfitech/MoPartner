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

function App() {
  const { status, userId, handleLogOut, displayName, email, photoURL } =
    useContext(AuthContext);
  const [theme, setTheme] = useState(false);
  const [pages, setPages] = useState("dashboard");
  const [auth, setAuth] = useState<any>(status);
  const [user, setUser] = useState<any>(userId);
  useEffect(() => {
    setAuth(status);
    setUser(userId);
  }, [status]);

  return (
    <div
      className={
        theme
          ? 'className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white'
          : 'className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white dark'
      }
    >
      {auth === "authenticated" && user !== null ? (
        <>
          <Navbar setTheme={setTheme} />
          <Sidebar setPages={setPages} />
          {pages === "dashboard" && <Dashboard />}
          {pages === "rentals" && <Rentals />}
          {pages === "profile" && (
            <Profile username={displayName} email={email} avatar={photoURL} />
          )}
        </>
      ) : (
        <Sigin />
      )}
    </div>
  );
}

export default App;
