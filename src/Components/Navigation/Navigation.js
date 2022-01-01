import { Fragment, useState } from "react";
import NavBar from "./NavBar";
import Menu from "../Menu/Menu";

const Navigation = () => {
  const [menuIsShown, setMenuIsShown] = useState(null);

  const toggleMenuHandler = () => {
    setMenuIsShown((prev) => !prev);
  };

  return (
    <Fragment>
      <Menu menuIsShown={menuIsShown} toggle={toggleMenuHandler} />
      <NavBar toggle={toggleMenuHandler} />
    </Fragment>
  );
};
export default Navigation;
