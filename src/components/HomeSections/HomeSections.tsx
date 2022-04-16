import Section from "../common/Section/Section";
import styles from "./HomeSection.module.scss";

interface SectionTypes {
  title: string;
  name: string;
  heading: string;
  description: string;
  children: JSX.Element;
}

const HomeSection = ({
  title,
  name,
  heading,
  description,
  children,
}: SectionTypes) => {
  return (
    <Section title={title}>
      <div className={styles.sectionWrapper}>
        <span>{name}</span>
        <div className={styles.infoWrapper}>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>
        <hr />
        <div className={styles.contentWrapper}>{children}</div>
      </div>
    </Section>
  );
};

export default HomeSection;
