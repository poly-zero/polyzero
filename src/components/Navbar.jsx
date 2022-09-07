import { Navbar, Avatar } from "flowbite-react";
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
          className="mr-3 h-6 sm:h-9"
          alt="PolyZero Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PolyZero
        </span>
      </Navbar.Brand>
      
      <Avatar
        img="https://thispersondoesnotexist.com/image"
        rounded={true}
        stacked={true}
        alt="Your profile pic"
      />
    </Navbar>
  );
};

export default NavBar;
