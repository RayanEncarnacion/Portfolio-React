import styled from "styled-components";

export default styled.div`
  background-color: #2f4e6a;
  text-align: center;
  color: #f7f7f7;
  padding-top: 1.8em;
  padding-bottom: 3.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;

  h1 {
    font-size: 2.5em;
  }
  h2 {
    font-size: 1.8em;
  }

  @media (min-width: 768px) {
    padding-bottom: 7em;
    padding-top: 3em;
  }
  @media (min-width: 1024px) {
    padding-bottom: 8em;
    padding-top: 4em;
  }
  @media (min-width: 1530px) {
    padding-bottom: 10em;
    padding-top: 5em;
  }
`;
