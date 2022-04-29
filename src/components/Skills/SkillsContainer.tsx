import styles from "./SkillsContainer.module.scss";
import gitImg from "../../assets/github.png";
import reactImg from "../../assets/reactjs.jpg";
import nextImg from "../../assets/nextjs.jpg";
import nodeImg from "../../assets/nodejs.jpg";
import reactNativeImg from "../../assets/reactnative.jpg";
import sassImg from "../../assets/sass.jpg";

const SkillsContainer = () => {
  return (
    <div className={styles.skillsContainer}>
      <SkillsBox img={gitImg} title="Github" />
      <SkillsBox img={reactImg} title="ReactJs" />
      <SkillsBox img={nextImg} title="NextJs" />
      <SkillsBox img={nodeImg} title="NodeJs" />
      <SkillsBox img={reactNativeImg} title="React Native" />
      <SkillsBox img={sassImg} title="SASS" />
    </div>
  );
};

export default SkillsContainer;

const SkillsBox = ({ img, title }: { img: string; title: string }) => {
  return (
    <div title={title} className={styles.skillsBox}>
      <img src={img} alt={title} />
    </div>
  );
};
