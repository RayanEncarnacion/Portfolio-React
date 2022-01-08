import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  max-width: 300px;
  padding: 2em 1.2em 1.5em;
  text-align: center;
  width: 100%;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-font-smoothing: subpixel-antialiased;
    transform: scale(1.03);
  }

  & img {
    box-shadow: 0 0 10px rgb(0 0 0 / 15%);
    width: 100%;
  }

  & p {
    font-size: 0.95em;
  }

  & .img-container {
    display: flex;
    align-items: center;
    justify-content: space-around;

    & img {
      box-shadow: none;
      width: 12%;
    }
  }

  & .project-buttons {
    display: flex;
    align-items: center;
    gap: 0.5em;
    justify-content: center;
    margin-top: 0.7em;
    width: 100%;

    & a {
      background-color: #4f83b0;
      box-shadow: 0 2px 5px rgb(0 0 0 / 15%);
      color: #f7f7f7;
      font-weight: 600;
      padding: 0.4em 0;
      width: 100%;
    }
  }
`;
