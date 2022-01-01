import SectionWrapper from "../../UI/SectionWrapper";
import AboutMeInfo from "./AboutMeInfo";

const textCentered = { textAlign: "center" };

const AboutMe = () => {
  return (
    <SectionWrapper id={"about"} section={true} accent={false}>
      <p style={textCentered} className="accent">
        About Me
      </p>
      <h3 style={textCentered}>Get to know more about me</h3>
      <AboutMeInfo />
    </SectionWrapper>
  );
};

export default AboutMe;
