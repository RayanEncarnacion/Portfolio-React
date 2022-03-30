import StyledSkills from "./Styled/StyledSkills";
import HTML from "../../assets/SkillsLogos/html-5-logo-svgrepo-com.svg";
import CSS from "../../assets/SkillsLogos/css-3-logo-svgrepo-com.svg";
import SASS from "../../assets/SkillsLogos/sass-1.svg";
import Bootstrap from "../../assets/SkillsLogos/bootstrap-4-logo-svgrepo-com.svg";
import Tailwind from "../../assets/SkillsLogos/tailwind-svgrepo-com.svg";
import JavaScript from "../../assets/SkillsLogos/javascript-js-seeklogo.com.svg";
import React from "../../assets/SkillsLogos/react-logo-svgrepo-com.svg";
import NodeJs from "../../assets/SkillsLogos/nodejs-icon-logo-svgrepo-com.svg";
import MongoDB from "../../assets/SkillsLogos/mongodb-icon.svg";
import Mongoose from "../../assets/SkillsLogos/mongoose-logo.png";
import Git from "../../assets/SkillsLogos/git-icon.svg";
import MySql from "../../assets/SkillsLogos/cdnlogo.com_mysql.svg";

const mongoosePngStyle = { objectFit: "contain", width: "45px" };

const mySqlStyle = { paddingTop: "5px" };

const Skills = () => {
  return (
    <StyledSkills>
      <h4>Skills</h4>
      <div className="skills">
        <img src={HTML} alt="HTML 5" />
        <img src={CSS} alt="CSS 3" />
        <img src={SASS} alt="Sass" />
        <img src={Bootstrap} alt="Bootstrap 5" />
        <img src={Tailwind} alt="Tailwind" />
        <img src={JavaScript} alt="JavaScript" />
        <img src={React} alt="React" />
        <img src={NodeJs} alt="NodeJs" />
        <img src={MongoDB} alt="MongoSB" />
        <img src={MySql} style={mySqlStyle} alt="MySql" />
        <img style={mongoosePngStyle} src={Mongoose} alt="Mongoose" />
        <img src={Git} alt="Git" />
      </div>
    </StyledSkills>
  );
};

export default Skills;
