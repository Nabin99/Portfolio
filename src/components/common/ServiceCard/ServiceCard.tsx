import styles from "./ServiceCard.module.scss";
import { ServiceCardTypes } from "../../../types/types";

const ServiceCard = ({ description, heading, icon }: ServiceCardTypes) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
