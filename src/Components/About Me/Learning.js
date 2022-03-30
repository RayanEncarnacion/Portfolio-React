import ColdFusion from "../../assets/SkillsLogos/coldfusion-logo.png";

const margin = { marginTop: "2em", marginBottom: "1em" };
const marginTop = {
  marginTop: "1em",
};

const Learning = () => {
  return (
    <div style={margin}>
      <h4>Learning</h4>
      <div>
        <span className="tooltip">
          <img style={marginTop} src={ColdFusion} alt="Adobe Cold Fusion" />
        </span>
      </div>
    </div>
  );
};

export default Learning;
