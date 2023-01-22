import React from "../../assets/SkillsLogos/react-logo-svgrepo-com.svg";

const Learning = () => {
  return (
    <div style={{ margin: "2em 0 1em" }}>
      <h4>Learning</h4>
      <div>
        <span className="tooltip">
          <img style={{
            margin: ".5em 0 0 1rem",
          }} src={React} alt="React Native" />
          <small className="react-native-text">React Native</small>
        </span>
      </div>
    </div>
  );
};

export default Learning;
