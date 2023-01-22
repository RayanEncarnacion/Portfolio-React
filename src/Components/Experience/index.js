import SectionWrapper from "../../UI/SectionWrapper";

import Tailwind from "../../assets/SkillsLogos/tailwind-svgrepo-com.svg";
import JavaScript from "../../assets/SkillsLogos/javascript-js-seeklogo.com.svg";
import React from "../../assets/SkillsLogos/react-logo-svgrepo-com.svg";
import NodeJs from "../../assets/SkillsLogos/nodejs-icon-logo-svgrepo-com.svg";
import MySql from "../../assets/SkillsLogos/cdnlogo.com_mysql.svg";
import NextJs from "../../assets/SkillsLogos/nextjs.svg";
import Typescript from "../../assets/SkillsLogos/typescript.svg";
import ColdFusion from "../../assets/SkillsLogos/coldfusion-logo.png";


const Experience = () => {
  return (
    <SectionWrapper
      centered={true}
      id={"projects"}
      section={true}
      secondary={true}
    >
      <p style={{ textAlign: "center" }} className="accent">
        Working experience
      </p>
      <h3 style={{ textAlign: "center" }}>See my professional journey</h3>

      <div className="working-container">
        <div className="working-container__job">
          <h4>CONAPE</h4>
          <p className="working-container__job-role">Full stack developer ( March 2022 – present ) </p>
          <ul className="working-container__job-accomplishments">
            <li>I contributed to improvements in the performance and reusability of the code by implementing CFC (ColdFusion components) to handle the back-end logic instead of using regular ColdFusion Markup.</li>
            <li>I contributed to the migration from ColdFusion (Adobe) to Lucee (Open Source).</li>
          </ul>
          <p className="working-container__job-role">Primary technologies used</p>
          <div className="working-container__job-technologies">
            <img src={MySql} alt="MySQL logo" />
            <img src={JavaScript} alt="JavaScript logo" />
            <img src={ColdFusion} alt="ColdFusion logo" />
          </div>
        </div>

        <div className="working-container__job">
          <h4>Harper SRL</h4>
          <p className="working-container__job-role">Front End developer ( December 2022 – present )  </p>
          <ul className="working-container__job-accomplishments">
            <li>Create quality mockups and prototypes.</li>
            <li>Create  reusable components for an internal library to maintain an uniform UI.</li>
            <li>Collaborate with back-end developers and web designers to improve usability.</li>
          </ul>
          <p className="working-container__job-role">Primary technologies used</p>
          <div className="working-container__job-technologies">
            <img className="px-img" src={React} alt="React logo" />
            <img src={NodeJs} alt="NodeJs logo" />
            <img className="px-img" src={NextJs} alt="NextJs logo" />
            <img src={Typescript} alt="Typescript logo" />
            <img className="px-img" src={Tailwind} alt="Tailwind logo" />
            {/* <img src={ColdFusion} alt="ColdFusion logo" /> */}
          </div>
        </div>

      </div>
    </SectionWrapper >
  );
};

export default Experience