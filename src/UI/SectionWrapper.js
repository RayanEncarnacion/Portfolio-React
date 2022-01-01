import StyledSectionWrapper from "./Styled/StyledSectionWrapper";

const SectionWrapper = ({
  children,
  accent,
  secondary,
  section,
  id,
  centered,
  as,
}) => {
  return (
    <StyledSectionWrapper
      as={as || ""}
      id={id}
      accent={accent}
      section={section}
      secondary={secondary}
      centered={centered}
    >
      {children}
    </StyledSectionWrapper>
  );
};

export default SectionWrapper;
