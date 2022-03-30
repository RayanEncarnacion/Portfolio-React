import { Fragment } from "react";
import AccentAnchor from "../../UI/AccentAnchor";
import StyledProjectCard from "./Styled/StyledProjectCard";

const ProjectCard = ({
  project: { title, img, description, live, repository, tech, buttons },
}) => {
  // Buttons placeholder
  let btns;

  if (buttons === 2) {
    btns = (
      <Fragment>
        <AccentAnchor href={live} target="_blank" rel="noopener noreferrer">
          See Live
        </AccentAnchor>
        <AccentAnchor
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
        >
          See Code
        </AccentAnchor>
      </Fragment>
    );
  } else {
    btns = (
      <AccentAnchor href={repository} target="_blank" rel="noopener noreferrer">
        See Code
      </AccentAnchor>
    );
  }

  return (
    <StyledProjectCard>
      {img !== "" && <img src={img} alt={title} />}
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="img-container">
        {tech.map((logo) => {
          if (logo.includes("leaflet")) {
            return (
              <img
                style={{ width: "25%" }}
                key={Math.random()}
                src={logo}
                alt=""
              />
            );
          }
          return <img key={Math.random()} src={logo} alt="" />;
        })}
      </div>
      <div className="project-buttons">{btns}</div>
    </StyledProjectCard>
  );
};

export default ProjectCard;
