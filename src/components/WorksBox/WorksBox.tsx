// import { useEffect, useState } from "react";
import { useGetSomeWorksQuery } from "../../services/worksApi";
import WorksCard from "../common/WorksCard/WorksCard";
import styles from "./WorksBox.module.scss";

const WorksBox = ({ size = 6 }: { size?: number | null }) => {
  const { data, isLoading, error } = useGetSomeWorksQuery(size);

  return (
    <div className={styles.worksCardContainer}>
      <>{isLoading && <span>Loading....</span>}</>
      <>{error && <span>An Error Occured!</span>}</>
      {data &&
        data.map((obj: any) => (
          <WorksCard
            key={obj.title + obj.projectDate}
            description={obj.description}
            createdAt={obj.projectDate}
            title={obj.title}
            urlAddress={obj.projectLink as string}
          />
        ))}
    </div>
  );
};

export default WorksBox;
