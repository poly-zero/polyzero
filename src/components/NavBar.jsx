import { Navbar, Avatar, Dropdown, Button } from "flowbite-react";
import { logout } from "../firebase/firebase";
import { Link } from "react-router-dom";
import {
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

const NavBar = ({ setShowSidebar, pathName, user }) => {
  return (
    <nav className="z-50 px-3 py-2">
      <div className="container items-center justify-between max-w-full mx-auto md:px-8">
        <Navbar rounded={true} border={false}>
          {/* Navigation list container */}
          <Navbar.Collapse>
            <Navbar.Link href="/navbars">
              {pathName === "/"
                ? "About"
                : pathName.toUpperCase().replace("/", "")}
            </Navbar.Link>
          </Navbar.Collapse>
          <button
            className="block px-3 text-sm bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
            type="button"
            onClick={() => setShowSidebar("left-0")}
          >
            <Bars3Icon className="w-6 text-gray-700" />
          </button>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <p className="text-sm">{user.displayName}</p>
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
                      <span className="block text-sm">{user.displayName}</span>
                      <span className="block text-sm font-medium truncate">
                        {user.email}
                      </span>
                    </Dropdown.Header>
                    {/* <Dropdown.Item>
                      <Link to="/dashboard">DashBoard</Link>
                    </Dropdown.Item> */}
                    <Dropdown.Item onClick={() => logout()}>
                      Log out
                    </Dropdown.Item>
                  </div>
                </Dropdown>
              </>
            ) : (
              <>
                <Button.Group>
                  <Button color="gray">
                    <Link to="/login">
                      <ArrowLeftOnRectangleIcon className="w-6 text-gray-700" />
                    </Link>
                  </Button>
                  <Button color="gray">
                    <Link to="/registration">
                      <UserPlusIcon className="w-6 text-gray-700" />
                    </Link>
                  </Button>
                </Button.Group>
              </>
            )}
          </div>
        </Navbar>
      </div>
    </nav>
  );
};

export default NavBar;
