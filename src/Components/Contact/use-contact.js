import { useState, useRef } from "react";
import * as emailjs from "emailjs-com";

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const useContact = () => {
  const [sendingDataError, setSendingDataError] = useState(false);
  const [dataSentSuccess, setDataSentSuccess] = useState(false);
  const [enteredInput, setEnteredInput] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);
  const formRef = useRef();

  const checkOnBlur = () => {
    if (enteredInput.match(pattern)) return;
    setInputIsValid(false);
  };

  const onChangeHandler = (e) => {
    setEnteredInput(e.target.value);

    if (e.target.value.match(pattern)) {
      setInputIsValid(true);
    }
  };

  const sendEmailHandler = (e, userToken) => {
    e.preventDefault();

    if (!inputIsValid) return;

    emailjs
      .sendForm("contact_service", "contact_form", formRef.current, userToken)
      .then(() => {
        if (formRef.current.querySelector(".error-text")) {
          formRef.current.querySelector(".error-text").remove();
        }
        setDataSentSuccess(true);
        setEnteredInput("");
        formRef.current.reset();
      })
      .catch((error) => {
        setSendingDataError(true);
        setEnteredInput("");
        formRef.current.reset();
      });
  };

  return {
    formRef,
    error: sendingDataError,
    success: dataSentSuccess,
    emailIsValid: inputIsValid,
    enteredEmail: enteredInput,
    onBlur: checkOnBlur,
    onChange: onChangeHandler,
    sendEmailHandler,
  };
};
export default useContact;
