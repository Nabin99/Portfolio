import { useEffect, useState } from "react";
import Section from "../common/Section/Section";
import WorksCard from "../WorksCard/WorksCard";
import styles from "./WorksSection.module.scss";
import getData from "../../utils/requestHandlers/getData";

const WorksSection = () => {
  const [myWorks, myWorksSet] = useState([]);

  useEffect(() => {
    let mounted = true;
    getData("https://api.github.com/users/Nabin99/repos")
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
    <Section title="My Works">
      <div className={styles.sectionWrapper}>
        <span>Works</span>
        <h2>My Works</h2>
        <p>
          I learnig and growing at the same time.
          <br />
          Being a full stack developer, I need to have different works. <br />
          Works that I have currently, are listed below, mean while I learn new
          Works and grow with every project I do.
        </p>
        <hr />
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
      </div>
    </Section>
  );
};

export default WorksSection;
