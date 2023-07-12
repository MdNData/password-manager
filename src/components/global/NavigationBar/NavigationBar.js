//import the logo
import logo from "./logo.png";




//nav main container
const NavBar = () => {
  return (
    <nav>
      {/* Logo container  */}
      <NavLogo data={NavData_Logo} />
    </nav>
  );
};

//container for the logo nav data
const NavData_Logo = {
  homePath: "/password-manager",
  imgSrc: { logo },
  imgAlt: "Yellow lock in a blue gear.",
  title: "Password Manager",
};

//part of the navbar that contain the logo
const NavLogo = ({ data }) => {
  const { homePath, imgSrc, imgAlt, title } = data;

  return (
    <div className="nav-logo">
      <a href={homePath}>
        <img src={imgSrc.logo} alt={imgAlt} />
        <h2>{title}</h2>
      </a>
    </div>
  );
};

//full element ready to be displayed
export const NavigationBar = () => {
  return <NavBar />;
};
