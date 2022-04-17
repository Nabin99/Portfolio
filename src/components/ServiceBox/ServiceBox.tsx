import styles from "./ServiceBox.module.scss";
import { ServiceCardTypes } from "../../types/types";
import SvgProvider from "../../constants/SvgProvider";
import ServiceCard from "../common/ServiceCard/ServiceCard";

const ServiceBox = () => {
  return (
    <div className={styles.cardWrapper}>
      {lists.map((obj: ServiceCardTypes, i: number) => (
        <ServiceCard
          key={obj.heading + i}
          description={obj.description}
          heading={obj.heading}
          icon={obj.icon}
        />
      ))}
    </div>
  );
};

export default ServiceBox;

const lists: ServiceCardTypes[] = [
  {
    icon: SvgProvider.web,
    heading: "Web Development",
    description:
      "I provide a comple website solutions. I buid websites using different technologies required by the client.",
  },
  {
    icon: SvgProvider.desktop,
    heading: "Desktop App Development",
    description:
      "I provide a comple website solutions. I buid websites using different technologies required by the client.",
  },
  {
    icon: SvgProvider.mobile,
    heading: "Mobile App Development",
    description:
      "I provide a comple website solutions. I buid websites using different technologies required by the client.",
  },
  {
    icon: SvgProvider.design,
    heading: "UI/UX Designing",
    description:
      "I provide a comple website solutions. I buid websites using different technologies required by the client.",
  },
  {
    icon: SvgProvider.videoGraphy,
    heading: "Video Editing",
    description:
      "I provide a comple website solutions. I buid websites using different technologies required by the client.",
  },
  {
    icon: SvgProvider.photo,
    heading: "Photography",
    description:
      "I provide a comple website solutions. I buid websites using different technologies required by the client.",
  },
];
