import SectionWrapper from "../../UI/SectionWrapper";
import CardsContainer from "./CardsContainer";
import MiniProjectsContainer from "./Styled/MiniProjectsContainer";
import { projectsDetails, miniProjectsDetails } from "./Cards/cards";

const Projects = () => {
  return (
    <SectionWrapper
      centered={true}
      id={"projects"}
      section={true}
      secondary={true}
    >
      <p className="accent">Main Projects</p>
      <h3>See my projects Live or the Code Repository</h3>
      <CardsContainer cards={projectsDetails} />
      <MiniProjectsContainer>
        <p className="accent">Other Projects</p>
        <h3>See my projects Live or the Code Repository</h3>
        <CardsContainer mini={true} cards={miniProjectsDetails} />
      </MiniProjectsContainer>
    </SectionWrapper>
  );
};

export default Projects;
