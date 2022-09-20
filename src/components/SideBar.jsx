import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { logout, auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { ReactComponent as FaceBook } from "../assets/socialMediaIcons/icons8-facebook.svg";
// import { ReactComponent as Instagram } from "../assets/socialMediaIcons/icons8-instagram.svg";
// import { ReactComponent as LinkedIn } from "../assets/socialMediaIcons/icons8-linkedin.svg";
// import { ReactComponent as Twitter } from "../assets/socialMediaIcons/icons8-twitter.svg";
// import { ReactComponent as Line } from "../assets/socialMediaIcons/icons8-line.svg";
import { ReactComponent as Footprint } from "../assets/navIcons/carbon-footprint.svg";
import { ReactComponent as Tiers } from "../assets/navIcons/tiers.svg";
import { ReactComponent as Dashboard } from "../assets/navIcons/dashboard.svg";
import { ReactComponent as Logout } from "../assets/navIcons/logout.svg";
import { Progress } from "flowbite-react";

const SideBar = ({ result }) => {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const [userInfo, setUserInfo] = useState(null);
  const [user, loading, error] = useAuthState(auth);
  const pathName = useLocation().pathname;

  return (
    <>
      <div className="">
        <Progress
          progress={
            !result
              ? 0
              : pathName === "/footprint"
              ? 25
              : pathName === "/tiers"
              ? 50
              : pathName === "/payment"
              ? 75
              : pathName === "/confirmation"
              ? 100
              : 0
          }
          size="sm"
        />
      </div>
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
          {/* Close button for SideBar */}
          <button
            className=" float-right md:hidden"
            onClick={() => setShowSidebar("-left-64")}
          >
            X
          </button>
          {/* Logo */}
          <NavLink to="/" exact="true" className="flex mt-2">
            <img
              src="https://raw.githubusercontent.com/poly-zero/polyzero/main/public/images/favicon64.ico"
              className="mr-3 h-14"
              alt="PolyZero Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              PolyZero
            </span>
          </NavLink>

          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            {/* Beginning of nav list */}
            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/wizard"
                  exact="true"
                  className={
                    pathName === "/wizard" || pathName === "/results"
                      ? "flex items-center gap-4 text-sm font-semibold px-4 py-3 rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 text-white shadow-md"
                      : "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg "
                  }
                >
                  {/* <Icon name="dashboard" size="2xl" /> */}
                  <Footprint />
                  Footprint Estimator
                </NavLink>
              </li>
              {result && (
                <li className="rounded-lg mb-4">
                  <NavLink
                    to="/tiers"
                    exact="true"
                    className={
                      pathName === "/tiers"
                        ? "flex items-center gap-4 text-sm font-semibold px-4 py-3 rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 text-white shadow-md"
                        : "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg "
                    }
                  >
                    {/* <Icon name="dashboard" size="2xl" /> */}
                    <Tiers />
                    Tiers
                  </NavLink>
                </li>
              )}
              {user && (
                <>
                  <li className="rounded-lg mb-4">
                    <NavLink
                      to="/dashboard"
                      exact="true"
                      className={
                        pathName === "/dashboard"
                          ? "flex items-center gap-4 text-sm font-semibold px-4 py-3 rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 text-white shadow-md"
                          : "flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg "
                      }
                    >
                      {/* <Icon name="dashboard" size="2xl" /> */}
                      <Dashboard />
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="rounded-lg mb-4">
                    <button
                      className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg "
                      onClick={logout}
                    >
                      <Logout />
                      Log out
                    </button>
                  </li>
                </>
              )}
            </ul>

            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              {/* <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                <a
                  href="/"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-4 text-sm font-light py-3"
                >
                  Share
                </a>
              </li> */}
              {/* <li>
                <div className="grid grid-cols-3">
                  <FaceBook />
                  <Instagram />
                  <a
                    href="https://twitter.com/intent/tweet?text=Checkout PolyZero!"
                    data-show-count="false"
                  >
                    <Twitter />
                  </a>
                  <LinkedIn />
                  <Line />
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
