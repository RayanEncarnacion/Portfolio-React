import styled from "styled-components";

export default styled.a`
  padding: ${({ accent }) => (accent ? "0.3em 1.4em" : "0.4em 1em")};
  font-size: ${({ accent }) => (accent ? "1.1em" : "1em")};
  font-weight: bold;
  color: ${({ inverted }) => (inverted ? "#2f4e6a" : "#f7f7f7")};
  background-color: ${({ accent, light }) =>
    accent ? "#00C0A7" : light ? "#4f83b0" : "#2f4e6a"};
  outline: none;
  border: none;
  box-shadow: ${(props) =>
    props.accent
      ? "5px 5px 15px rgba(0, 0, 0, 0.25)"
      : "0 0 5px rgba(0, 0, 0, 0.15)"};
  text-shadow: 1px 2px rgba(0, 0, 0, 0.1);
  backface-visibility: hidden;
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
`;
