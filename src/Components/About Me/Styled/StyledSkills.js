import styled from "styled-components";

export default styled.div`
  margin-top: 2rem;

  & .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2em;
    width: 100%;
    margin-top: 1em;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  } 
`;
