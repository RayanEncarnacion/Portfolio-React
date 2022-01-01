import AccentAnchor from "../../UI/AccentAnchor";
import StyledHeroActionBtns from "./Styled/StyledHeroActionBtns";

const HeroActionBtns = () => {
  return (
    <StyledHeroActionBtns>
      <AccentAnchor light={true} href="#about">
        More About Me
      </AccentAnchor>
      <AccentAnchor light={true} href="#projects">
        Latest Projects
      </AccentAnchor>
    </StyledHeroActionBtns>
  );
};

export default HeroActionBtns;
