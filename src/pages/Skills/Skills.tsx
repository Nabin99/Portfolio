import Section from "../../components/common/Section/Section";
import SkillsContainer from "../../components/Skills/SkillsContainer";
import styles from "./Skills.module.scss";
const Skills = () => {
  return (
    <Section title="My Contact Page">
      <div className={styles.pageWrapper}>
        <h1>My Skills</h1>
        <p>These are the list of all the wroks I have done or involve with.</p>
        <hr />
        <SkillsContainer />
      </div>
    </Section>
  );
};
export default Skills;
