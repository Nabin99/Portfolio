import Section from "../common/Section/Section";
import styles from "./ServiceSection.module.scss";

const ServiceSection = () => {
  return (
    <Section title="My Services">
      <div className={styles.sectionWrapper}>
        <span>Services</span>
        <h2>My Services</h2>
        <p>
          As a Full Stack Developer, <br />I offer full stack software support
          using different tools like Reactjs,Nextjs,Nodejs,React Native etc.
        </p>
        <hr />
      </div>
    </Section>
  );
};

export default ServiceSection;
