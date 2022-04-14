import { useState } from "react";
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

  const clearForm = () => {
    firstNameSet("");
    lastNameSet("");
    emailSet("");
    messageSet("");
  };
  const submit = () => {
    console.log(firstName, lastName, email, message);
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
            error={false}
            value={firstName}
          />
          <InputBox
            label="Last Name"
            name="lastName"
            placeholder="Please enter last name here..."
            type="text"
            setValue={lastNameSet}
            error={false}
            value={lastName}
          />

          <InputBox
            label="Email"
            name="emial"
            placeholder="Please enter email here..."
            type="email"
            setValue={emailSet}
            error={false}
            value={email}
          />

          <TextAreaBox
            error={false}
            label="Leave your Message"
            name="message"
            placeholder="Please leave your message here..."
            setValue={messageSet}
            value={message}
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
