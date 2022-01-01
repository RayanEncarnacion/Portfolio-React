import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  max-width: 1000px;

  p {
    margin-top: 0.7em;
  }

  & div {
    width: 100%;
    max-width: 500px;
  }

  img {
    width: 40px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1em;
    justify-content: center;
    padding-top: 2em;

    & div {
      max-width: 500px;
      width: 100%;
    }
  }
  @media (min-width: 1024px) {
    gap: 2.5em;
  }
`;
