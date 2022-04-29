import { useState } from "react";
import Button from "../common/Button/Button";
import Section from "../common/Section/Section";
import ContactForm from "../contactform/contactform";
import styles from "./HeroSection.module.scss";
import SvgIcon from "../common/SvgIcon/SvgIcon";
import SvgProvider from "../../constants/SvgProvider";

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
              <SvgIcon title="Instagram Icon">{SvgProvider.instagram}</SvgIcon>
              <SvgIcon title="Facebook Icon">{SvgProvider.facebook}</SvgIcon>
              <SvgIcon title="Twitter Icon">{SvgProvider.twitter}</SvgIcon>
              <SvgIcon title="LinkedIn Icon">{SvgProvider.linkedin}</SvgIcon>
              <SvgIcon title="GitHub Icon">{SvgProvider.github}</SvgIcon>
            </div>
          </div>
        </div>
      </Section>
      {toggleContact ?<ContactForm hideForm={hideContact} /> : null}
    </>
  );
};

export default HeroSection;
