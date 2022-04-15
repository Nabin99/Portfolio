import { useState } from "react";
import {
  emailValidator,
  messageValidator,
  nameValidator,
} from "../../utils/formValidators/fomValidators";
import Button from "../common/Button/Button";
import InputBox from "../common/InputBox/InputBox";
import TextAreaBox from "../common/TextAreaBox/TextAreaBox";
import styles from "./contactform.module.scss";

interface ContactFormTypes {
  hideForm: () => void;
}

const ContactForm = ({ hideForm }: ContactFormTypes) => {
  const [firstName, firstNameSet] = useState("");
  const [lastName, lastNameSet] = useState("");
  const [email, emailSet] = useState("");
  const [message, messageSet] = useState("");
  const [error, errorSet] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    messageError: false,
  });

  const clearForm = () => {
    firstNameSet("");
    lastNameSet("");
    emailSet("");
    messageSet("");
    errorSet({
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      messageError: false,
    });
  };

  const submit = () => {
    let tempErr = {
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      messageError: false,
    };
    let errCnt = 0;

    if (!nameValidator(firstName)) {
      tempErr.firstNameError = true;
      errCnt++;
    }
    if (!nameValidator(lastName)) {
      tempErr.lastNameError = true;
      errCnt++;
    }
    if (!emailValidator(email)) {
      tempErr.emailError = true;
      errCnt++;
    }
    if (!messageValidator(message)) {
      tempErr.messageError = true;
      errCnt++;
    }

    errorSet({ ...tempErr });

    if (errCnt === 0) {
      console.log(firstName, lastName, email, message);
      hideForm();
    }
  };
  return (
    <div className={styles.hireForm}>
      <form name="contact">
        <div className={styles.container}>
          <h2>Contact Me</h2>
          <p>Please fill in this form so that I can contact you.</p>

          <InputBox
            label="First Name"
            name="firstName"
            placeholder="Please enter first name here..."
            type="text"
            setValue={firstNameSet}
            error={error.firstNameError}
            value={firstName}
            errorMsg="please enter a valid first name."
          />
          <InputBox
            label="Last Name"
            name="lastName"
            placeholder="Please enter last name here..."
            type="text"
            setValue={lastNameSet}
            error={error.lastNameError}
            value={lastName}
            errorMsg="please enter a valid last name."
          />

          <InputBox
            label="Email"
            name="emial"
            placeholder="Please enter email here..."
            type="email"
            setValue={emailSet}
            error={error.emailError}
            value={email}
            errorMsg="please enter a valid email ID."
          />

          <TextAreaBox
            error={error.messageError}
            label="Message"
            name="message"
            placeholder="Please leave your message here..."
            setValue={messageSet}
            value={message}
            errorMsg="please enter a proper message."
          />
          <div>
            <Button label="Submit" clickHandler={submit} />
          </div>

          <div>
            <Button label="Clear" clickHandler={clearForm} />
            <Button label="Close" clickHandler={hideForm} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
