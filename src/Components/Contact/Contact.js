import { useRef, useState } from "react";
import env from "react-dotenv";
import AccentAnchor from "../../UI/AccentAnchor";
import SectionWrapper from "../../UI/SectionWrapper";
import sendEmail from "./send-email";
import StyledForm from "./Styled/StyledForm";

const Contact = () => {
  const [sendingDataError, setSendingDataError] = useState(false);
  const [dataSentSuccess, setDataSentSuccess] = useState(false);
  const formRef = useRef();

  const sendEmailHandler = (e) => {
    e.preventDefault();
    sendEmail(
      formRef,
      env.EMAIL_JS_TOKEN,
      setDataSentSuccess,
      setSendingDataError
    );
  };

  return (
    <SectionWrapper centered={true} id={"contact"} section={true}>
      <p className="accent">Contact</p>
      <h3>Get in touch with me</h3>
      <StyledForm onSubmit={sendEmailHandler} ref={formRef} id="contact-form">
        <h4>Send me a message</h4>
        <div className="inputs-container">
          <input type="hidden" name="contact_number" />
          <label htmlFor="name">Name</label>
          <input className="fields" required type="text" name="user_name" />
          <label htmlFor="email">Email</label>
          <input className="fields" required type="text" name="user_email" />
          <label htmlFor="message">Message</label>
          <input className="fields" required type="text" name="message" />
          {dataSentSuccess && (
            <p className="success-text">Message was sent succesfully!</p>
          )}
          {sendingDataError && (
            <p className="error-text">Error sending your message!</p>
          )}
        </div>
        <AccentAnchor as="button" light="true">
          Send
        </AccentAnchor>
      </StyledForm>
    </SectionWrapper>
  );
};

export default Contact;
