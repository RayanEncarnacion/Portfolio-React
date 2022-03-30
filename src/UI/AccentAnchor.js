import StyledAccentAnchor from "./Styled/StyledAccentAnchor";

const AccentAnchor = ({
  children,
  onClick,
  accent,
  light,
  as,
  href,
  rel,
  target,
}) => {
  return (
    <StyledAccentAnchor
      as={as || ""}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      accent={accent}
      light={light}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </StyledAccentAnchor>
  );
};

export default AccentAnchor;
