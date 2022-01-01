import SQL from "../../assets/SkillsLogos/sql-database-generic-svgrepo-com.svg";

const margin = { marginTop: "2em", marginBottom: "1em" };
const marginTop = {
  marginTop: "1em",
};

const Learning = () => {
  return (
    <div style={margin}>
      <h4>Learning</h4>
      <div>
        <img style={marginTop} src={SQL} alt="SQL" />
      </div>
    </div>
  );
};

export default Learning;
