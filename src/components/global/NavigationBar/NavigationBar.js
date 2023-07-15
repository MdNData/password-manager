//import the logo
import logo from "./logo.png";
import { NavLogo } from "./NavLogo";

//container for the logo nav data
const NavData_Logo = {
  homePath: "/password-manager",
  imgSrc: { logo },
  imgAlt: "Yellow lock in a blue gear.",
  title: "Password Manager",
};

//nav main container
const NavBar = () => {
  return (
    <nav>
      {/* Logo container  */}
      <NavLogo data={NavData_Logo} />
    </nav>
  );
};


//full element ready to be displayed
export const NavigationBar = () => {
  return <NavBar />;
};
