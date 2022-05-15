import styles from "./SkillsContainer.module.scss";
import {
  githubImg,
  reactjsImg,
  nextjsImg,
  nodejsImg,
  reactnativeImg,
  sassImg,
} from "../../constants/imageProvider";

const SkillsContainer = () => {
  return (
    <div className={styles.skillsContainer}>
      <SkillsBox img={githubImg} title="Github" />
      <SkillsBox img={reactjsImg} title="ReactJs" />
      <SkillsBox img={nextjsImg} title="NextJs" />
      <SkillsBox img={nodejsImg} title="NodeJs" />
      <SkillsBox img={reactnativeImg} title="React Native" />
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
