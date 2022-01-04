import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import StyledMenu from "./StyledMenu";
import AccentAnchor from "../../UI/AccentAnchor";
import LinksList from "../../UI/LinksList";
import NAVIGATION_LINKS from "../Navigation/NavigationLinks";

const Menu = ({ toggle, menuIsShown }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <StyledMenu animate={menuIsShown}>
          <button onClick={toggle} className="close-btn">
            X
          </button>
          <LinksList
            menu={true}
            linksArray={NAVIGATION_LINKS}
            onClick={toggle}
          />
        </StyledMenu>,
        document.querySelector("#menu-overlay")
      )}
    </Fragment>
  );
};

export default Menu;
