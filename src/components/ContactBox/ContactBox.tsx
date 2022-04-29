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
import postData from "../../services/requestHandlers/postData";
import styles from "./ContactBox.module.scss";
import Section from "../common/Section/Section";
import SvgProvider from "../../constants/SvgProvider";

interface ContactBoxTypes {
  title: string;
  description: string;
}

const ContactBox = ({ title, description }: ContactBoxTypes) => {
  return (
    <Section title="My Contact Page">
      <div className={styles.pageWrapper}>
        <h1>{title}</h1>
        <p>{description}</p>
        <hr />
        <div className={styles.layout}>
          <div className={styles.formWrapper}>
            <ContactForm />
          </div>
          <div className={styles.iconsWrapper}>
            <SocialIcons
              title="GitHub"
              icon={SvgProvider.github}
              address="https://github.com/Nabin99"
            />
            <SocialIcons
              title="LinkedIn"
              icon={SvgProvider.linkedin}
              address="https://www.linkedin.com/in/nabin-dhital-a8ba64234"
            />
            <SocialIcons
              title="Facebook"
              icon={SvgProvider.facebook}
              address="https://www.facebook.com/nabin.dhital.56"
            />
            <SocialIcons
              title="Instagram"
              icon={SvgProvider.instagram}
              address="https://www.instagram.com/dhitalnabin11/"
            />
            <SocialIcons
              title="Twitter"
              icon={SvgProvider.twitter}
              address="https://twitter.com/dhitalnabin111?t=5TKgyPYJKs45rsoRdjwpIA&s=09"
            />
            <SocialIcons title="Mail" icon={SvgProvider.mail} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactBox;

const ContactForm = () => {
  const [fullName, fullNameSet] = useState("");
  const [email, emailSet] = useState("");
  const [message, messageSet] = useState("");
  const [error, errorSet] = useState({
    fullNameError: false,
    emailError: false,
    messageError: false,
  });

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

  const submit = () => {
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
      postData("http://localhost:5000/contact/", {
        name: fullName,
        email: email,
        message: message,
      })
        .then((res) => toast("Successfully Received Your Message"))
        .catch((err) => toast("An Error Occured"));
      clearForm();
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

interface SocialIconsTypes {
  title: string;
  icon: JSX.Element;
  address?: string;
}

const SocialIcons = ({ title, icon, address }: SocialIconsTypes) => {
  return (
    <a
      href={address ? address : "mailto:dhitalnabin11@gmail.com"}
      rel="noreferrer"
      target="_blank"
      title={title}
      className={styles.link}
    >
      <div className={styles.iconBox}>
        {icon}
        <h3>{title}</h3>
      </div>
    </a>
  );
};
