import { useEffect, useState } from "react";
import WorksCard from "../common/WorksCard/WorksCard";
import styles from "./WorksBox.module.scss";
import getData from "../../services/requestHandlers/getData";

const WorksBox = () => {
  const [myWorks, myWorksSet] = useState([]);

  useEffect(() => {
    let mounted = true;
    getData("http://localhost:5000/works/list/6")
      .then((res) => {
        if (res.ok) return res.json();
        else throw res.json();
      })
      .then((data) => {
        if (mounted) myWorksSet(data.payload.data);
      })
      .catch(async (err) => {
        console.log(await err);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={styles.worksCardContainer}>
      {myWorks.map((obj: any) => (
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
