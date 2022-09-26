import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { ReactComponent as Footprint } from "../../assets/navIcons/carbon-footprint.svg";

const LandingNavBar = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 500) setMobile(true);
  }, []);
  return (
    <nav>
      <Navbar fluid={true} rounded={true} border={true}>
        <Navbar.Toggle />
        <Navbar.Brand href="/">
          <div className="flex my-2">
            <img
              src="https://raw.githubusercontent.com/poly-zero/polyzero/main/public/images/favicon64.ico"
              className="h-8 mt-1 ml-2 mr-3 md:h-14"
              alt="PolyZero Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap md:text-2xl dark:text-white">
              PolyZero
            </span>
          </div>
        </Navbar.Brand>
        <div className="flex gap-2 md:order-2">
          <Button className="text-base capitalize hover:animate-pulse">
            <NavLink to={"/wizard"} exact={"true"}>
              {mobile ? <Footprint /> : "Estimate my plastic footprint"}
            </NavLink>
          </Button>
        </div>
        <Navbar.Collapse>
          <NavHashLink to="/#about">
            <p className="text-base">About</p>
          </NavHashLink>
          <NavHashLink to="/tips">
            <p className="text-base">Reduce Plastic</p>
          </NavHashLink>
          <NavHashLink to="/resources">
            <p className="text-base">Further Reading</p>
          </NavHashLink>
          <NavHashLink to="/#team">
            <p className="text-base">Team</p>
          </NavHashLink>
          <NavHashLink to="/#contact">
            <p className="text-base">Contact</p>
          </NavHashLink>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default LandingNavBar;
