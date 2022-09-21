import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { logout, auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ReactComponent as Footprint } from "../assets/navIcons/carbon-footprint.svg";
import { ReactComponent as Tiers } from "../assets/navIcons/tiers.svg";
import { Progress, Dropdown, Avatar, Button } from "flowbite-react";

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
              : pathName === "/wizard"
              ? 20
              : pathName === "/results"
              ? 45
              : pathName === "/tiers"
              ? 60
              : pathName === "/payment"
              ? 75
              : pathName === "/confirmation"
              ? 100
              : 0
          }
          size="sm"
        />
      </div>
      {window.innerWidth < 500 && (
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
      )}

      {/* SideBar Container */}
      <div
        className={`h-screen fixed top-0 z-50 md:left-0 ${showSidebar} flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
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
            </ul>
            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              {user ? (
                <>
                  <div className="flex items-center gap-2">
                    <Dropdown
                      arrowIcon={false}
                      inline={true}
                      label={
                        <Avatar
                          img={user.photoURL ? user.photoURL : false}
                          rounded={true}
                          alt="Your profile pic"
                        />
                      }
                    >
                      <div>
                        <Dropdown.Header>
                          <span className="block text-sm">
                            {user.displayName}
                          </span>
                          <span className="block text-sm font-medium truncate">
                            {user.email}
                          </span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item onClick={() => logout()}>
                          Log out
                        </Dropdown.Item>
                      </div>
                    </Dropdown>
                    <p className="text-sm">{user.displayName}</p>
                  </div>
                </>
              ) : (
                <>
                  <Button.Group>
                    <Button color="gray">
                      <Link to="/login">Log in</Link>
                    </Button>
                    <Button color="gray">
                      <Link to="/registration">Register</Link>
                    </Button>
                  </Button.Group>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
