import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { logout, auth, getUserInfo } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const [userInfo, setUserInfo] = useState(null);
  const [user, loading, error] = useAuthState(auth);
  const pathName = useLocation().pathname;

  return (
    <>
      <NavBar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        user={user}
        loading={loading}
        error={error}
        pathName={pathName}
      />

      {/* SideBar Container */}
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          {/* Logo */}
          <a href="/" rel="noreferrer" className="flex mt-2">
            <img
              src="https://raw.githubusercontent.com/poly-zero/polyzero/main/public/images/favicon64.ico"
              className="mr-3 h-14"
              alt="PolyZero Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              PolyZero
            </span>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />
            
            {/* Beginning of nav list */}
            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/"
                  exact={true}
                  className={
                    pathName === "/"
                      ? "flex items-center gap-4 text-sm font-semibold px-4 py-3 rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 text-white shadow-md"
                      : "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg "
                  }
                >
                  {/* <Icon name="dashboard" size="2xl" /> */}
                  Home
                </NavLink>
              </li>
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/footprint"
                  exact
                  className={
                    pathName === "/footprint"
                      ? "flex items-center gap-4 text-sm font-semibold px-4 py-3 rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 text-white shadow-md"
                      : "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg "
                  }
                >
                  {/* <Icon name="dashboard" size="2xl" /> */}
                  Footprint Calculator
                </NavLink>
              </li>
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/tiers"
                  exact
                  className={
                    pathName === "/tiers"
                      ? "flex items-center gap-4 text-sm font-semibold px-4 py-3 rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 text-white shadow-md"
                      : "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg "
                  }
                >
                  {/* <Icon name="dashboard" size="2xl" /> */}
                  Tiers
                </NavLink>
              </li>
              {!user && (
                <>
                  <li className="rounded-lg mb-4">
                    <a
                      href="/login"
                      rel="noreferrer"
                      className={
                        pathName === "/login"
                          ? "flex items-center gap-4 text-sm font-semibold px-4 py-3 rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 text-white shadow-md"
                          : "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg "
                      }
                    >
                      {/* <Icon name="fingerprint" size="2xl" /> */}
                      Login
                    </a>
                  </li>
                  <li className="rounded-lg mb-4">
                    <a
                      href="/registration"
                      rel="noreferrer"
                      className={
                        pathName === "/registration"
                          ? "flex items-center gap-4 text-sm font-semibold px-4 py-3 rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 text-white shadow-md"
                          : "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg "
                      }
                    >
                      {/* <Icon name="list_alt" size="2xl" /> */}
                      Register
                    </a>
                  </li>
                </>
              )}
              <li className="rounded-lg mb-4">
                <a
                  href="/"
                  rel="noreferrer"
                  className={
                    pathName === "/dashboard"
                      ? "flex items-center gap-4 text-sm font-semibold px-4 py-3 rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 text-white shadow-md"
                      : "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg "
                  }
                >
                  {/* <Icon name="account_circle" size="2xl" /> */}
                  Dashboard
                </a>
              </li>
            </ul>

            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                <a
                  href="/"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-4 text-sm font-light py-3"
                >
                  Share
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
