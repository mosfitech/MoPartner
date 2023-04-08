import PaymentsIcon from "@mui/icons-material/Payments";
import HomeIcon from "@mui/icons-material/Home";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
export default function Sidebar({ setPages }) {
  const handleClick = (e: any) => {
    setPages(e);
  };
  return (
    <>
      <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-primary-600 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                  Main
                </div>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleClick("dashboard")}
                className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <HomeIcon />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Dashboard
                </span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleClick("financial")}
                className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <PaymentsIcon />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Keuangan
                </span>
                <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-white-500 bg-bubble-gum rounded-full">
                  New
                </span>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleClick("rentals")}
                className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <HandshakeIcon />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Handle Rentals
                </span>
              </div>
            </li>

            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                  Settings
                </div>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleClick("profile")}
                className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <PersonIcon />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Profile
                </span>
              </div>
            </li>
          </ul>
          <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
            Copyright @2023
          </p>
        </div>
      </div>
    </>
  );
}
