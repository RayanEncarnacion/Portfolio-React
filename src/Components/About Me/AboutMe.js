import SectionWrapper from "../../UI/SectionWrapper";
import AboutMeInfo from "./AboutMeInfo";

const AboutMe = () => {
  return (
    <SectionWrapper id={"about"} section={true} accent={false}>
      <p style={{ textAlign: "center" }} className="accent">
        About Me
      </p>
      <h3 style={{ textAlign: "center" }}>Get to know more about me</h3>
      <AboutMeInfo />
    </SectionWrapper>
  );
};




export default AboutMe;
