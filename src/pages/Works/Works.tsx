import PageHeader from "../../components/PageHeader/PageHeader";
import WorksBox from "../../components/WorksBox/WorksBox";
// import ApiProvider from "../../constants/ApiProvider";
import { useGetSomeWorksQuery } from "../../services/worksApi";
const Works = () => {
  const { data, isLoading, error } = useGetSomeWorksQuery(6);
  !isLoading && !error && console.log(data);
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
