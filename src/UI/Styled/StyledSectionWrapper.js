import styled from "styled-components";

export default styled.section`
  background-color: ${(props) =>
    props.accent ? "#2f4e6a" : props.secondary ? "#ebebeb" : "#f7f7f7"};
  text-align: ${(props) => (props.centered ? "center" : "")};
  padding-top: ${(props) => (props.section ? "2rem" : "")};
  padding-bottom: ${(props) => (props.section ? "2rem" : "")};
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${({ accent }) => (accent ? "#f7f7f7" : "inherit")};

  & h3 {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    padding-top: ${(props) => (props.section ? "3rem" : "")};
    padding-bottom: ${(props) => (props.section ? "3rem" : "")};
  }

  @media (min-width: 1024px) {
    padding-top: ${(props) => (props.section ? "4rem" : "")};
    padding-bottom: ${(props) => (props.section ? "4rem" : "")};
  }
`;
