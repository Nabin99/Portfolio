import Section from "../common/Section/Section";
import styles from "./HomeSection.module.scss";
import { HomeSectionTypes } from "../../types/types";
import SectionButton from "../common/SectionButton/SectionButton";

const HomeSection = ({
  title,
  name,
  heading,
  description,
  children,
  icon,
  pageLink,
}: HomeSectionTypes) => {
  return (
    <Section title={title}>
      <div className={styles.sectionWrapper}>
        <span>{name.toUpperCase()}</span>
        <div className={styles.infoWrapper}>
          <h2>
            {icon}
            {heading}
          </h2>
          <p>{description}</p>
        </div>
        <hr />
        <div className={styles.contentWrapper}>{children}</div>
        <div className={styles.sectionButtonWrapper}>
          <SectionButton label="LEARN MORE >>" urlAddress={pageLink} />
        </div>
      </div>
    </Section>
  );
};

export default HomeSection;
