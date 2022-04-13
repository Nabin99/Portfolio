import Section from "../common/Section/Section";
import styles from "./SkillsSection.module.scss";

const SkillsSection = () => {
  return (
    <Section title="My Skills">
      <div className={styles.sectionWrapper}>
        <span>Skills</span>
        <h2>My Skills</h2>
        <p>
          I learnig and growing at the same time.
          <br />
          Being a full stack developer, I need to have different skills. <br />
          Skills that I have currently, are listed below, mean while I learn new
          skills and grow with every project I do.
        </p>
        <hr />
      </div>
    </Section>
  );
};

export default SkillsSection;
