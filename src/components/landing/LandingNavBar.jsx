import { NavLink, Link } from "react-router-dom";
import { Navbar, Button } from "flowbite-react";
import { NavHashLink } from "react-router-hash-link";

const LandingNavBar = () => {
  return (
    <nav className="">
      <Navbar fluid={true} rounded={true} border={true}>
        <Navbar.Brand href="/">
          <div className="flex mt-2">
            <img
              src="https://raw.githubusercontent.com/poly-zero/polyzero/main/public/images/favicon64.ico"
              className="mt-1 ml-2 mr-3 h-8 md:h-14"
              alt="PolyZero Logo"
            />
            <span className="self-center whitespace-nowrap text-xl md:text-2xl font-semibold dark:text-white">
              PolyZero
            </span>
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-2">
          <Button>
            <NavLink to={"/wizard"} exact={"true"}>
              Estimate my plastic footprint
            </NavLink>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <NavHashLink to="/#about">About</NavHashLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavHashLink to="/tips">Reduce Plastic</NavHashLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavHashLink to="/resources">Further Reading</NavHashLink>
          </Navbar.Link>
          <NavHashLink to="/#team">Team</NavHashLink>
          <NavHashLink to="/#contact">Contact</NavHashLink>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default LandingNavBar;
