import StyledCardsContainer from "./Styled/StyledCardsContainer";
import ProjectCard from "./ProjectCard";

const CardsContainer = ({ cards, mini }) => {
  return (
    <StyledCardsContainer mini={mini}>
      {cards.map((card) => {
        return <ProjectCard key={Math.random()} project={card} />;
      })}
    </StyledCardsContainer>
  );
};

export default CardsContainer;
