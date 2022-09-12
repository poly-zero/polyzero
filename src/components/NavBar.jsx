import { useState, useEffect } from "react";
import { Navbar, Avatar, Dropdown, Button } from "flowbite-react";
import { logout, auth, getUserInfo } from "../firebase/firebase";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = ({
  showSideBar,
  setShowSidebar,
  pathName,
  userInfo,
  setUserInfo,
  user,
  loading,
  error,
}) => {
  useEffect(() => {
    if (loading) return;
    if (user && !userInfo)
      getUserInfo(user.uid).then((res) =>
        res.forEach((doc) => setUserInfo(doc.data()))
      );
    else if (!user) setUserInfo(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);

  return (
    <nav className="py-6 px-3">
      <div className="container max-w-full mx-auto items-center justify-between md:px-8">
        <Navbar rounded={true} border={true}>
          {/* Navigation list container */}
          <Navbar.Collapse>
            <Navbar.Link href="/navbars">
              {pathName === "/"
                ? "About"
                : pathName.toUpperCase().replace("/", "")}
            </Navbar.Link>
          </Navbar.Collapse>
          <button
            className="cursor-pointer text-sm px-3 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setShowSidebar("left-0")}
          >
            Menu
          </button>
          {/* Logo container */}
          {/* <Navbar.Brand href="/">
            <img
              src="https://raw.githubusercontent.com/poly-zero/polyzero/main/public/images/favicon64.ico"
              className="mr-3 h-14"
              alt="PolyZero Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              PolyZero
            </span>
          </Navbar.Brand> */}

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <p className="text-sm">{user.displayName}</p>
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      img="https://thispersondoesnotexist.com/image"
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
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
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
                    <Link to="/login">Log in</Link>
                  </Button>
                  <Button color="gray">
                    <Link to="/registration">Register</Link>
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
