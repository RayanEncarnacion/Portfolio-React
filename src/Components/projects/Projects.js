import SectionWrapper from "../../UI/SectionWrapper";
import CardsContainer from "./CardsContainer";
import MiniProjectsContainer from "./Styled/MiniProjectsContainer";
import ProjectCards from "./Cards/CARDS";
import { MiniProjectsCards } from "./Cards/CARDS";

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
      <CardsContainer cards={ProjectCards} />
      <MiniProjectsContainer>
        <p className="accent">Main Projects</p>
        <h3>See my projects Live or the Code Repository</h3>
        <CardsContainer mini={true} cards={MiniProjectsCards} />
      </MiniProjectsContainer>
    </SectionWrapper>
  );
};

export default Projects;
