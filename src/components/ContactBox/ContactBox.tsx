import { useState } from "react";
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

interface ContactBoxTypes{
    title:string;
    description:string;
}

const ContactBox = ({
    title,
    description,
  }:ContactBoxTypes) => {
  return (
    <Section title="My Contact Page">
    <div className={styles.pageWrapper}>
      <h1>{title}</h1>
      <p>{description}</p>
      <hr />
      <div className={styles.layout}>
        <div className={styles.formWrapper}>
            <ContactForm/>
        </div>
        <div className={styles.iconsWrapper}>
            <SocialIcons title="GitHub" icon={SvgProvider.github}/>
            <SocialIcons title="GitHub" icon={SvgProvider.github}/>
            <SocialIcons title="GitHub" icon={SvgProvider.github}/>
            <SocialIcons title="GitHub" icon={SvgProvider.github}/>
            <SocialIcons title="GitHub" icon={SvgProvider.github}/>
            <SocialIcons title="GitHub" icon={SvgProvider.github}/>
        </div>
      </div>
    </div>
  </Section>
  )
}

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
      });
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
    </div>
  );
};

interface SocialIconsTypes{
    title:string;
    icon: JSX.Element;
}


const SocialIcons = ({title,icon}:SocialIconsTypes)=>{
    return(
        <a href="/#" target="_blank" title={title} className={styles.link}>
        <div className={styles.iconBox}>
            {icon}
            <h3>{title}</h3>
        </div>
        </a>
    )
}