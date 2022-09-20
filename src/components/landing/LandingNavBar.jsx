import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
import { ReactComponent as Footprint } from "../../assets/navIcons/carbon-footprint.svg";
import { Button } from "@material-tailwind/react";

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
              className="mt-1 ml-2 mr-3 h-8 md:h-14"
              alt="PolyZero Logo"
            />
            <span className="self-center whitespace-nowrap text-xl md:text-2xl font-semibold dark:text-white">
              PolyZero
            </span>
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-2">
          <Button className="capitalize text-base">
            <NavLink to={"/wizard"} exact={"true"}>
              {mobile ? <Footprint /> : "Estimate my plastic footprint"}
            </NavLink>
          </Button>
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#about"><p className="text-base">About</p></Navbar.Link>
          <Navbar.Link href="/tips"><p className="text-base">Reduce Plastic</p></Navbar.Link>
          <Navbar.Link href="/resources"><p className="text-base">Further Reading</p></Navbar.Link>
          <Navbar.Link href="#Team"><p className="text-base">Team</p></Navbar.Link>
          <Navbar.Link href="#contact"><p className="text-base">Contact</p></Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default LandingNavBar;
