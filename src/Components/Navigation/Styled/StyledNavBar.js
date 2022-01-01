import styled from "styled-components";

export default styled.nav`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f7f7f7;
  background-color: #2f4e6a;
  padding: 0.5em 1em;

  & h1 {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.8em;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    .menu-btn {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    padding: 1em 1.5em;
  }

  @media (min-width: 1280px) {
    padding: 1em 2.5em;
  }

  @media (min-width: 1530px) {
    padding: 1em 3.5em;
  }
`;
