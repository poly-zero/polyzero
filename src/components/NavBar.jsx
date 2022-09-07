import { Navbar, Avatar, Dropdown } from "flowbite-react";
const NavBar = () => {
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
          className="mr-3 h-11 sm:h-9"
          alt="PolyZero Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          PolyZero
        </span>
      </Navbar.Brand>

      <div className="flex items-center gap-4">
        <p>Eiko Yamamoto</p>
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
          <Dropdown.Header>
            <span className="block text-sm">Eiko Yamamoto</span>
            <span className="block text-sm font-medium truncate">
              eikoyamamoto@polyzero.earth
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Log in</Dropdown.Item>
          <Dropdown.Item>Register</Dropdown.Item>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Log out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default NavBar;
