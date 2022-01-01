import styled from "styled-components";

export default styled.button`
  display: block;
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
  font-size: 2em;

  @media (min-width: 768px) {
    display: none;
  }
`;
