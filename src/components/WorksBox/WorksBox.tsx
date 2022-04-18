import { useEffect, useState } from "react";
import WorksCard from "../common/WorksCard/WorksCard";
import styles from "./WorksBox.module.scss";
import getData from "../../utils/requestHandlers/getData";

const WorksBox = () => {
  const [myWorks, myWorksSet] = useState([]);

  useEffect(() => {
    let mounted = true;
    getData("https://api.github.com/users/Nabin99/repos?per_page=6")
      .then((res) => {
        if (res.ok) return res.json();
        else throw res.json();
      })
      .then((data) => {
        if (mounted) myWorksSet(data);
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
          key={obj.name + obj.created_at}
          description={obj.description}
          createdAt={obj.created_at}
          title={obj.name}
          urlAddress={obj.html_url as string}
        />
      ))}
    </div>
  );
};

export default WorksBox;
