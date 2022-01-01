import { useState } from "react";
import AccentAnchor from "./AccentAnchor";
import StyledLinkList from "./Styled/StyledLinkList";

const LinksList = ({ linksArray, footer, navigation, menu, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const links = linksArray.map((link) => {
    // Hire me anchor
    if (link.text.includes("Hire")) {
      return (
        <AccentAnchor
          onClick={onClick}
          key={link.id}
          href={link.href}
          accent={true}
        >
          {link.text}
        </AccentAnchor>
      );
    }
    // CV obj has fileName
    if (link.fileName) {
      <a
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        key={link.id}
        href={link.href}
        download={link.fileName}
      >
        {link.text}
      </a>;
    }
    // Basic anchor
    return (
      <a
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        key={link.id}
        href={link.href}
      >
        {link.text}
      </a>
    );
  });

  return (
    <StyledLinkList menu={menu} navigation={navigation} footer={footer}>
      {links}
    </StyledLinkList>
  );
};

export default LinksList;
