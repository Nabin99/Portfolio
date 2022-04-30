import PageHeader from "../../components/PageHeader/PageHeader";
import WorksBox from "../../components/WorksBox/WorksBox";
import ApiProvider from "../../constants/ApiProvider";
const Works = () => {
  return (
    <PageHeader
      title="My Wroks Page"
      heading="My Works"
      description="These are the list of all the wroks I have done or involve with."
    >
      <WorksBox url={ApiProvider.getWorks} size={12} />
    </PageHeader>
  );
};
export default Works;
