import styled from "styled-components";

export default styled.div`
  display: grid;
  align-items: flex-start;
  justify-content: center;
  gap: 1em;
  justify-items: ${({ mini }) => (mini ? "space-evenly" : "center")};
  margin: 2.5em auto 0;

  @media (min-width: 768px) {
    grid-template-columns: 350px 350px;
    grid-template-columns: 320px 320px;
    padding-top: 3em;
    width: max-content;
  }

  @medi (min-width: 1024px) {
    grid-template-columns: ${({ mini }) => (mini ? "repeat(3,1fr)" : "")} ;
  }

  @media (min-width: 1280px) {
    gap: 1.5em;
    grid-template-columns: ${({ mini }) =>
      mini ? "repeat(3, 1fr)" : "repeat(4,280px)"}  ;
    width: max-content;
}
  }
`;
