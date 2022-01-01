import StyledAboutMe from "./Styled/StyledAboutMe";
import AboutMyself from "./AboutMyself";
import Skills from "./Skills";
import Learning from "./Learning";

const AboutMeInfo = () => {
  return (
    <StyledAboutMe>
      <AboutMyself />
      <div>
        <Skills />
        <Learning />
      </div>
    </StyledAboutMe>
  );
};

export default AboutMeInfo;
