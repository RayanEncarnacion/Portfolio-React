import styled from "styled-components";

export default styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-content: center;
  transform: ${(props) =>
    props.animate ? "translateY(0%)" : "translateY(-120%)"};
  position: absolute;
  left: 0;
  background-color: black;
  color: white;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  
  
  &.active {
    transform: translateY(0%)
    transition: transform 0.3s ease-in-out;
  }

  & .close-btn {
    position: absolute;
    top: 1em;
    z-index: 200;
    right: 1em;
    color: #f7f7f7;
    background: transparent;
    border: none;
    outline: none;
    font-weight: bold;
    font-size: 1.2em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  

  @keyframes slide-down {
    from {
      transform: translateY(-110%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;
