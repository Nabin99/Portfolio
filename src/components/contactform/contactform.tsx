import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  emailValidator,
  messageValidator,
  nameValidator,
} from "../../utils/formValidators/fomValidators";
import Button from "../common/Button/Button";
import InputBox from "../common/InputBox/InputBox";
import TextAreaBox from "../common/TextAreaBox/TextAreaBox";
import styles from "./ContactForm.module.scss";
import { usePostMessageMutation } from "../../services/messageApi";

interface ContactFormTypes {
  hideForm?: () => void;
}

const ContactForm = ({ hideForm }: ContactFormTypes) => {
  const [fullName, fullNameSet] = useState("");
  const [email, emailSet] = useState("");
  const [message, messageSet] = useState("");
  const [error, errorSet] = useState({
    fullNameError: false,
    emailError: false,
    messageError: false,
  });

  const [postMessage] = usePostMessageMutation();

  const clearForm = () => {
    fullNameSet("");
    emailSet("");
    messageSet("");
    errorSet({
      fullNameError: false,
      emailError: false,
      messageError: false,
    });
  };

  const validatefullName = (value: string) => {
    if (!nameValidator(value)) {
      errorSet((pre) => ({ ...pre, fullNameError: true }));
    } else {
      errorSet((pre) => ({ ...pre, fullNameError: false }));
    }
  };

  const validateEmail = (value: string) => {
    if (!emailValidator(value)) {
      errorSet((pre) => ({ ...pre, emailError: true }));
    } else {
      errorSet((pre) => ({ ...pre, emailError: false }));
    }
  };
  const validateMessage = (value: string) => {
    if (!messageValidator(value)) {
      errorSet((pre) => ({ ...pre, messageError: true }));
    } else {
      errorSet((pre) => ({ ...pre, messageError: false }));
    }
  };

  const submit = async () => {
    let tempErr = {
      fullNameError: false,
      emailError: false,
      messageError: false,
    };
    let errCnt = 0;

    if (!nameValidator(fullName)) {
      tempErr.fullNameError = true;
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
      toast("Sending Message");
      let data: any = await postMessage({ name: fullName, email, message });
      if (data.data) {
        toast("Successfully Received Your Message");
        clearForm();
      } else {
        toast("An Error Occured");
      }
    }
  };
  return (
    <div className={styles.hireForm}>
      <form name="contact">
        <div className={styles.container}>
          <h2>Contact Me</h2>
          <p>Please fill in this form so that I can contact you back.</p>

          <InputBox
            label="Full Name"
            name="fullName"
            placeholder="Please enter full name here..."
            type="text"
            setValue={fullNameSet}
            validateInput={validatefullName}
            error={error.fullNameError}
            value={fullName}
            errorMsg="please enter a valid full name."
          />

          <InputBox
            label="Email"
            name="email"
            placeholder="Please enter email here..."
            type="email"
            validateInput={validateEmail}
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
            validateInput={validateMessage}
            setValue={messageSet}
            value={message}
            errorMsg="please enter a proper message."
          />
          <div>
            <Button label="Submit" clickHandler={submit} />
          </div>

          <div>
            <Button label="Clear" clickHandler={clearForm} />
            {hideForm && <Button label="Close" clickHandler={hideForm} />}
          </div>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactForm;
