//part of the navbar that contain the logo
export const NavLogo = ({ data }) => {
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
