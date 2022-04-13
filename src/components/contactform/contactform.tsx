import { useState } from "react";
import Button from "../common/Button/Button";
import styles from "./contactform.module.scss";

interface ContactFormTypes {
  hideForm: () => void;
}

const ContactForm = ({ hideForm }: ContactFormTypes) => {
  const [firstName, firsNameSet] = useState("");
  const [lastName, lastNameSet] = useState("");
  const [email, emailSet] = useState("");
  const [message, messageSet] = useState("");

  const clearForm = () => {
    firsNameSet("");
    lastNameSet("");
    emailSet("");
    messageSet("");
  };
  const Submit = () => {
    console.log(firstName, lastName, email, message);
  };
  return (
    <div className={styles.hireForm}>
      <form name="contact">
        <div className={styles.container}>
          <h2>Contact Me</h2>
          <p>Please fill in this form so that I can contact you.</p>

          <div>
            <label htmlFor="firstName">
              <b>First Name:</b>
            </label>
            <input
              type="text"
              placeholder="Enter First Name...."
              name="firstName"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName">
              <b>Last Name:</b>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name...."
              name="lastName"
              required
            />
          </div>
          <div>
            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email...."
              name="email"
              required
            />
          </div>

          <div>
            <label htmlFor="message">
              <b>Write a message:</b>
            </label>
            <textarea
              id="message"
              placeholder="Enter message here....."
              name="message"
              required
            ></textarea>
          </div>
          <div>
            <Button label="Submit" clickHandler={Submit} />
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
