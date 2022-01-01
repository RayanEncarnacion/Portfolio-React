import styled from "styled-components";

export default styled.form`
  background-color: #2f4e6a;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  color: #f7f7f7;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  max-width: 380px;
  padding: 1em 1.5em;

  & h4 {
    font-size: 1.2em;
    text-align: center;
    margin: 1rem auto;
  }

  & .inputs-container {
    display: flex;
    flex-direction: column;
    margin-top: 2.5em;
    width: 100%;

    & input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #f7f7f7;
      color: #f7f7f7;
      font-size: 1em;
      margin-bottom: 0.8em;
      outline: none;
      padding-top: 0.5em;
    }

    & label {
      font-size: 0.9em;
      font-weight: 700;
      text-align: left;
    }
  }

  & button {
    margin: 2rem auto 1em;
    padding: 0.5em 0;
    width: 150px;
    font-size: 1em;
  }

  & .success-text {
    color: #23fc52;
    font-weight: bold;
    margin-top: 1em;
  }

  & .error-text {
    color: #ff9b9b;
    font-weight: bold;
    margin-top: 1em;
  }

  @media (min-width: 1280px) {
    margin-top: 3em;
    padding: 2em;
  }
`;
