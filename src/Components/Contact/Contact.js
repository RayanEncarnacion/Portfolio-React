import { useState } from "react";
import env from "react-dotenv";
import AccentAnchor from "../../UI/AccentAnchor";
import SectionWrapper from "../../UI/SectionWrapper";
import StyledForm from "./Styled/StyledForm";
import useContact from "./use-contact";

const invalidEmail = (
  <small style={{ color: "#ff7d7d", textAlign: "left", marginBottom: ".8em" }}>
    Enter a valid email address!
  </small>
);

const Contact = () => {
  const {
    formRef,
    error,
    success,
    emailIsValid,
    enteredEmail,
    onBlur,
    onChange,
    sendEmailHandler,
  } = useContact();

  return (
    <SectionWrapper centered={true} id={"contact"} section={true}>
      <p className="accent">Contact</p>
      <h3>Get in touch with me</h3>
      <StyledForm
        onSubmit={(e) => sendEmailHandler(e, env.EMAIL_JS_TOKEN)}
        ref={formRef}
        id="contact-form"
      >
        <h4>Send me a message</h4>
        <div className="inputs-container">
          <input type="hidden" name="contact_number" />
          <label htmlFor="name">Name</label>
          <input className="fields" required type="text" name="user_name" />
          <label
            style={{ color: `${emailIsValid ? "#f7f7f7" : "#ff7d7d"}` }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            style={{
              borderBottomColor: `${emailIsValid ? "#f7f7f7" : "#ff7d7d"}`,
            }}
            className="fields"
            required
            type="text"
            name="user_email"
            value={enteredEmail}
            onChange={onChange}
            onBlur={onBlur}
          />
          {!emailIsValid && invalidEmail}
          <label htmlFor="message">Message</label>
          <input className="fields" required type="text" name="message" />
          {success && (
            <p className="success-text">Message was sent succesfully!</p>
          )}
          {error && <p className="error-text">Error sending your message!</p>}
        </div>
        <AccentAnchor as="button" light="true">
          Send
        </AccentAnchor>
      </StyledForm>
    </SectionWrapper>
  );
};

export default Contact;
