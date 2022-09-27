import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import { logout, auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ReactComponent as Footprint } from "../assets/navIcons/carbon-footprint.svg";
import { ReactComponent as Tiers } from "../assets/navIcons/tiers.svg";
import { Dropdown, Avatar, Button } from "flowbite-react";
import {
  ArrowLeftOnRectangleIcon,
  ShoppingCartIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/polyzero-logo3.png";

const SideBar = ({ storedTier, storedPayment, windowWidth }) => {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const [user, loading, error] = useAuthState(auth);
  const pathName = useLocation().pathname;

  return (
    <>
      {windowWidth < 768 && (
        <NavBar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          user={user}
          loading={loading}
          error={error}
          pathName={pathName}
        />
      )}

      {/* SideBar Container */}
      <div
        className={`h-screen fixed top-0 z-50 md:left-0 ${showSidebar} flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 py-4 px-6 transition-all duration-300`}
      >
        <div className="relative flex-col items-stretch min-h-full px-0 flex-nowrap">
          {/* Close button for SideBar */}
          <button
            className="float-right md:hidden"
            onClick={() => setShowSidebar("-left-64")}
          >
            <XMarkIcon className="w-6" />
          </button>
          {/* Logo */}
          <NavLink to="/" exact="true" className="flex mt-2">
            <img src={logo} className="mr-3 h-18" alt="PolyZero Logo" />
          </NavLink>

          <div className="flex flex-col">
            <hr className="min-w-full my-4" />
            {/* Beginning of nav list */}
            <ul className="flex flex-col min-w-full list-none">
              <li className="mb-4 rounded-lg">
                <NavLink
                  to="/wizard"
                  exact="true"
                  className={`${
                    pathName === "/wizard" || pathName === "/results"
                      ? "bg-gradient-to-r to-emerald-600 from-sky-400 shadow-md text-white"
                      : "text-gray-700"
                  } flex items-center gap-4 text-sm  px-4 py-3 rounded-lg`}
                >
                  <Footprint
                    fill={`${
                      pathName === "/wizard" || pathName === "/results"
                        ? "white"
                        : "gray"
                    }`}
                    width="32"
                    height="32"
                  />
                  Footprint Estimator
                </NavLink>
              </li>
              {storedTier && (
                <li className="mb-4 rounded-lg">
                  <NavLink
                    to="/tiers"
                    exact="true"
                    className={`${
                      pathName === "/tiers"
                        ? "bg-gradient-to-r to-emerald-600 from-sky-400 shadow-md text-white"
                        : "text-gray-500"
                    } flex items-center gap-4 text-sm  px-4 py-3 rounded-lg`}
                  >
                    <Tiers className="w-8" />
                    Support Tiers
                  </NavLink>
                </li>
              )}
              {storedPayment && (
                <li className="mb-4 rounded-lg">
                  <NavLink
                    to="/payment"
                    exact="true"
                    className={`${
                      pathName === "/payment"
                        ? "bg-gradient-to-r to-emerald-600 from-sky-400 shadow-md text-white"
                        : "text-gray-500"
                    } flex items-center gap-4 text-sm  px-4 py-3 rounded-lg`}
                  >
                    <ShoppingCartIcon className="w-8" />
                    Order Confirmation
                  </NavLink>
                </li>
              )}
            </ul>
            <ul
              className={`absolute bottom-0 flex flex-col ${
                user ? "items-start" : "items-center"
              } min-w-full list-none`}
            >
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
                        <Dropdown.Item>
                          <Link to="/dashboard">DashBoard</Link>
                        </Dropdown.Item>
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
                      <Link to="/login">
                        <div className="flex flex-col items-center">
                          <ArrowLeftOnRectangleIcon className="w-6 text-slate-600" />
                          <span className="text-slate-600">Log in</span>
                        </div>
                      </Link>
                    </Button>
                    <Button color="gray">
                      <Link to="/registration">
                        <div className="flex flex-col items-center">
                          <UserPlusIcon className="w-6 text-slate-600" />
                          <span className="text-slate-600">Register</span>
                        </div>
                      </Link>
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
