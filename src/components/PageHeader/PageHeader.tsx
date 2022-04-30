import styles from "./PageHeader.module.scss";
import Section from "../common/Section/Section";

interface PageHeaderTypes {
  title: string;
  heading: string;
  description: string;
  children: JSX.Element;
}

const PageHeader = ({
  title,
  heading,
  description,
  children,
}: PageHeaderTypes) => {
  return (
    <Section title={title}>
      <div className={styles.pageWrapper}>
        <h1>{heading}</h1>
        <p>{description}</p>
        <hr />
        {children}
      </div>
    </Section>
  );
};

export default PageHeader;
