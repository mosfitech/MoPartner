//dashboard component
import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import coreLogo from "../assets/img/coreLogo.png";
import useDarkMode from "../hooks/useDarkMode";
import useDirection from "../hooks/useDirection";
import { Link } from "react-router-dom";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

export default function Dashboard(props: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { t } = useTranslation();
  const sidebarItems = [
    {
      title: t("sidebar.dashboard"),
      icon: "i-carbon-dashboard",
      path: "/dashboard",
    },
    {
      title: t("sidebar.vehicle"),
      icon: "i-carbon-bicycle",
      path: "/vehicle",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(-1);

  const { toggleDark } = useDarkMode();

  function changeLang(lang: string) {
    i18n.changeLanguage(lang);
    document.body.dir = i18n.dir();
  }

  return (
    <div className="h-full">
      <div className="flex flex-col w-full overflow-x-hidden text-slate-700 dark:text-slate-50 bg-gray-50 dark:bg-primary-800">
        <aside
          className={`${
            sidebarCollapsed ? "md:w-16" : "md:w-64"
          } bg-primary-600 dark:bg-primary-700 transition-width duration-700 w-full top-0 md:fixed bottom-0 z-30 flex-shrink-0   overflow-y-auto  lg:block`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center h-16 text-5xl bg-primary-700  dark:bg-primary-800">
              {!sidebarCollapsed ? (
                <img className="w-auto h-8" src={logo} alt="logo" />
              ) : (
                <img className="w-auto h-8" src={coreLogo} alt="coreLogo" />
              )}
            </div>
            <div className="mt-5">
              <nav className="flex-1 mt-5 text-xs font-medium leading-5 md:text-sm ">
                <ul className="m-0 ml-0 list-none">
                  {sidebarItems.map((item, index) => (
                    <li
                      key={item.title}
                      className={` ${
                        currentIndex === index ? "bg-primary-600" : ""
                      }`}
                    >
                      {" "}
                      <Link
                        onClick={() =>
                          setCurrentIndex(index === currentIndex ? -1 : index)
                        }
                        className={`${
                          sidebarCollapsed ? "justify-center" : ""
                        } ${currentIndex === index ? "bg-primary-600" : ""}  ${
                          currentIndex === index ? "bg-primary-700" : ""
                        } sidebar-item block py-4  px-4 flex items-center rtl:space-x-reverse space-x-2 text-white  decoration-none  leading-5  group hover:bg-primary-600  focus:outline-none  transition duration-150 ease-in-out`}
                        to={item.path}
                      >
                        <span className={`${item.icon} text-lg block`}></span>
                        {!sidebarCollapsed && (
                          <span className="block">{item.title}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 p-2 bg-primary-700 dark:bg-primary-800">
            <div className="flex items-center justify-around w-full h-full space-x-2 text-white">
             <p>V 1.0 </p>
            </div>
          </div>
        </aside>
        <div
          className={`w-full  relative transition-padding duration-700 pl-0 ${
            sidebarCollapsed
              ? "md:pl-16 rtl:pl-0 md:rtl:pr-16"
              : "rtl:pl-0 md:rtl:pr-64 md:pl-64"
          }`}
        >
          <header
            className={`${
              sidebarCollapsed
                ? "md:pl-20 md:rtl:pr-20"
                : "pl-0 rtl:pl-2 md:rtl:pr-40 md:rtl:pr-72 md:pl-72"
            } pr-0 pl-2 transition-padding duration-700 w-full md:fixed right-0 z-20 flex flex-col items-center justify-center md:justify-between  px-4 py-2 space-y-2 shadow-md  md:py-0 md:space-y-none md:h-16 md:flex-row bg-slate-100 dark:bg-primary-900`}
          >
            <div className="hidden md:block">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="text-xl cursor-pointer fill-current i-carbon-menu text-slate-600 dark:text-white hover:bg-slate-500"
              />
            </div>
      
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-slate-600 dark:text-white">
              <button
                onClick={toggleDark}
                className="text-xl cursor-pointer i-carbon-sun dark:i-carbon-moon hover:bg-slate-500 text-slate-600 dark:text-white"
              />
              <div className="flex h-8 bg-primary-700">
                <button
                  onClick={() => changeLang("en")}
                  className={`${
                    i18n.language === "en" ? "bg-primary-500" : "bg-transparent"
                  } w-8 cursor-pointer outline-none border-0 text-white`}
                >
                  En
                </button>
                <button
                  onClick={() => changeLang("id")}
                  className={`${
                    i18n.language === "id" ? "bg-primary-500" : "bg-transparent"
                  } w-8 cursor-pointer  outline-none border-0 text-white`}
                >
                  ID
                  </button>
              </div>

              {/* avatar */}
              <div className="flex items-center cursor-pointer pr-4">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </div>
          </header>
          <main className="w-full pt-16 text-slate-600 dark:text-slate-50 ">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  );
}
