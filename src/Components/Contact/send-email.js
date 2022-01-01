import * as emailjs from "emailjs-com";

export default function (form, userToken, successState, errorState) {
  emailjs
    .sendForm("contact_service", "contact_form", form.current, userToken)
    .then(() => {
      if (form.current.querySelector(".error-text")) {
        form.current.querySelector(".error-text").remove();
      }
      successState(true);
      form.current.reset();
    })
    .catch((error) => {
      errorState(true);
      form.current.reset();
    });
}
