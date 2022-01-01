import { useState } from "react";
import StyledAccentAnchor from "./Styled/StyledAccentAnchor";

const AccentAnchor = ({ children, onClick, accent, light, as, href }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <StyledAccentAnchor
      as={as || ""}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      accent={accent}
      light={light}
      href={href}
    >
      {children}
    </StyledAccentAnchor>
  );
};

export default AccentAnchor;
