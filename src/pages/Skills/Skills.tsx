import Section from "../../components/common/Section/Section";
import styles from "./Skills.module.scss";
const Skills = () => {
  return (
     <Section title="My Contact Page">
  <div className={styles.pageWrapper}>
    <h1>My Skills</h1>
    <p>These are the list of all the wroks I have done or involve with.</p>
    <hr />
  </div>
</Section>
);
};
export default Skills;
