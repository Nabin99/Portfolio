import PageHeader from "../../components/PageHeader/PageHeader";
import SkillsContainer from "../../components/Skills/SkillsContainer";

const Skills = () => {
  return (
    <PageHeader
      title="My Skills Page"
      heading="My Skills"
      description="These are the list of skills that I currently posses."
    >
      <SkillsContainer />
    </PageHeader>
  );
};
export default Skills;
