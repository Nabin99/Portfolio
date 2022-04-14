import Section from "../common/Section/Section";
import WorksCard from "../WorksCard/WorksCard";
import styles from "./WorksSection.module.scss";

const WorksSection = () => {
  return (
    <Section title="My Works">
      <div className={styles.sectionWrapper}>
        <span>Works</span>
        <h2>My Works</h2>
        <p>
          I learnig and growing at the same time.
          <br />
          Being a full stack developer, I need to have different works. <br />
          Works that I have currently, are listed below, mean while I learn new
          Works and grow with every project I do.
        </p>
        <hr />
        <WorksCard
          description="this just for text purpose this just for text purpose this just for text purpose this just for text purpose this just for text purpose this just for text purpose this just for text purpose this just for text purpose this just for text purpose this just for text purpose this just for text purpose this just for text purpose"
          iconSrc=""
          imgSrc=""
          secondaryText="date time"
          title="Project Name"
          urlAddress="/#"
        />
      </div>
    </Section>
  );
};

export default WorksSection;
