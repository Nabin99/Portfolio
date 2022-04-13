import Section from "../../common/section/section";
import styles from "./service.module.scss";

const SkillsSection = () => {
  return (
      <Section title="My Skillss">
    <div className={styles.sectionWrapper}>
      <span>Skillss</span>
      <h2>
      My Skillss
      </h2>
      <p>
        As a Full Stack Developer, <br />
        I offer full stack software support using different tools like Reactjs,Nextjs,Nodejs,React Native etc.
      </p>
      <hr />

    </div>
      </Section>
  )
}

export default SkillsSection;