import PageHeader from "../../components/PageHeader/PageHeader";
import WorksBox from "../../components/WorksBox/WorksBox";
import { useGetSomeWorksQuery } from "../../services/worksApi";
const Works = () => {
  return (
    <PageHeader
      title="My Wroks Page"
      heading="My Works"
      description="These are the list of all the wroks I have done or involve with."
    >
      <WorksBox size={null} />
    </PageHeader>
  );
};
export default Works;
