import Section from "../../components/common/Section/Section";
import WorksBox from "../../components/WorksBox/WorksBox";
import styles from "./Works.module.scss";
const Works = () => {
  return (
     <Section title="My Contact Page">
  <div className={styles.pageWrapper}>
    <h1>My Works</h1>
    <p>These are the list of all the wroks I have done or involve with.</p>
    <hr />
    <WorksBox/>
  </div>
</Section>
);
};
export default Works;
