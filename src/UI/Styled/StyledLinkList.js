import styled from "styled-components";

export default styled.ul`
  display: ${({ footer, navigation, menu }) =>
    footer ? "flex" : menu ? "flex" : navigation ? "none" : ""};

  font-size: ${({ menu }) => (menu ? "1.2em" : "1em")};
  justify-content: center;
  align-items: center;
  flex-direction: ${({ menu }) => (menu ? "column" : "row")};
  margin: ${({ footer }) => (footer ? "1em auto" : "")};
  gap: ${({ footer, menu }) => (footer ? "1em" : menu ? "1.5em" : "")};

  & a {
    transform: translateZ(0);
    -webkit-font-smoothing: subpixel-antialiased;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;

    &:hover {
      backface-visibility: hidden;
      transform: translateZ(0);
      -webkit-font-smoothing: subpixel-antialiased;
      transform: scale(1.04);
    }
  }

  @media (min-width: 768px) {
    display: ${({ navigation }) => (navigation ? "flex" : "")};
    gap: ${({ navigation }) => (navigation ? "1em" : "")};
  }

  @media (min-width: 1280px) {
    gap: ${({ navigation }) => (navigation ? "2em" : "")};
  }
`;
