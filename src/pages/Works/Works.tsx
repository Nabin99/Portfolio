import PageHeader from "../../components/PageHeader/PageHeader";
import WorksBox from "../../components/WorksBox/WorksBox";
const Works = () => {
  return (
    <PageHeader
      title="My Wroks Page"
      heading="My Works"
      description="These are the list of all the wroks I have done or involve with."
    >
      <WorksBox />
    </PageHeader>
  );
};
export default Works;
