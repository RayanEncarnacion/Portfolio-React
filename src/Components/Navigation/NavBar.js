import { useState } from "react";
import LinksList from "../../UI/LinksList";
import MenuBtn from "./MenuBtn";
import StyledNavBar from "./Styled/StyledNavBar";
import NAVIGATION_LINKS from "./navigationLinks";

const NavBar = ({ toggle }) => {
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    if (
      window.innerWidth === 1025 ||
      window.innerWidth === 769 ||
      window.innerWidth === 430
    )
      setWindowWidth(window.innerWidth);
  });

  return (
    <StyledNavBar>
      <h1>RE</h1>
      <MenuBtn className="menu-btn" onClick={toggle} />
      <LinksList className="nav-links d-none" navigation={true} linksArray={NAVIGATION_LINKS} />
    </StyledNavBar>
  );
};

export default NavBar;
