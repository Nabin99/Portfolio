import styles from "./Section.module.scss";
import { SectionType } from "../../../types/types";

const Section: SectionType = ({ children, title }) => {
  return (
    <section title={title} className={styles.sections}>
      <div>{children}</div>
    </section>
  );
};

export default Section;
