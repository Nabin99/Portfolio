import { useState } from "react";
import Button from "../common/Button/Button";
import Section from "../common/Section/Section";
import ContactForm from "../ContactForm/ContactForm";
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
              <SvgIcon title="Instagram Icon" address="https://www.instagram.com/dhitalnabin11/">{SvgProvider.instagram}</SvgIcon>
              <SvgIcon title="Facebook Icon" address="https://www.facebook.com/nabin.dhital.56">{SvgProvider.facebook}</SvgIcon>
              <SvgIcon title="Twitter Icon" address="https://twitter.com/dhitalnabin111?t=5TKgyPYJKs45rsoRdjwpIA&s=09">{SvgProvider.twitter}</SvgIcon>
              <SvgIcon title="LinkedIn Icon" address="https://www.linkedin.com/in/nabin-dhital-a8ba64234">{SvgProvider.linkedin}</SvgIcon>
              <SvgIcon title="GitHub Icon" address="https://github.com/Nabin99">{SvgProvider.github}</SvgIcon>
            </div>
          </div>
        </div>
      </Section>
      {toggleContact ?<ContactForm hideForm={hideContact} /> : null}
    </>
  );
};

export default HeroSection;
