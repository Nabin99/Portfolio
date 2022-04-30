import { useState } from "react";
import Button from "../common/Button/Button";
import Section from "../common/Section/Section";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./HeroSection.module.scss";
import SocialIcons from "../SocialIcons/SocialIcons";

const HeroSection = () => {
  const [toggleContact, toggleContactSet] = useState(false);
  const showContact = () => {
    if (!toggleContact) toggleContactSet(true);
  };
  const hideContact = () => {
    if (toggleContact) toggleContactSet(false);
  };
  return (
    <>
      <Section title="Hero Section">
        <div className={styles.contentWrapper}>
          <div>
            <h1>
              HI THERE,
              <br />
              IT{`’`}S ME <span>NABIN DHITAL.</span> <br />
            </h1>
            <p>
              A Full Stack WEB Developer. <br />
              Currently, a Software Engineering Trainee at Optimum Futurist.
            </p>
            <div className={styles.buttonWrapper}>
              <Button label="Hire Me" clickHandler={showContact} />
              <Button label="Download CV" clickHandler={() => {}} />
            </div>
            <div className={styles.iconWrapper}>
              <SocialIcons />
            </div>
          </div>
        </div>
      </Section>

      {toggleContact ? <ContactForm hideForm={hideContact} /> : null}
    </>
  );
};

export default HeroSection;
