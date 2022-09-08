import { Navbar, Avatar, Dropdown, Button } from "flowbite-react";
import { logout, auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Navbar rounded={true} border={true}>
      {/* Navigation list container */}
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
      </Navbar.Collapse>

      {/* Logo container */}
      <Navbar.Brand href="/">
        <img
          src="https://raw.githubusercontent.com/poly-zero/polyzero/main/public/images/favicon64.ico"
          className="mr-3 h-14"
          alt="PolyZero Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          PolyZero
        </span>
      </Navbar.Brand>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <p className="text-sm">Eiko Yamamoto</p>
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
                  <span className="block text-sm">Eiko Yamamoto</span>
                  <span className="block text-sm font-medium truncate">
                    eikoyamamoto@polyzero.earth
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item onClick={() => logout()}>Log out</Dropdown.Item>
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
  );
};

export default NavBar;
