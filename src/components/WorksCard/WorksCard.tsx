import CardsLink from "../common/CardsLink/CardsLink";
import styles from "./WorksCard.module.scss";
import image from "../../assets/png/workfallbackimg.png";
import logo from "../../assets/png/logo.png";

interface WorksCardTypes {
  title: string;
  createdAt: string;
  imgSrc?: string;
  description: string;
  urlAddress: string;
  iconSrc?: string;
}

const WorksCard = ({
  title,
  createdAt,
  imgSrc = "",
  description,
  urlAddress,
  iconSrc = "",
}: WorksCardTypes) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.icons}>
          <img src={iconSrc === "" ? logo : iconSrc} alt="icon" />
        </div>
        <div>
          <h3 title={title}>{title.toUpperCase()}</h3>
          <span>{new Date(createdAt).toDateString()}</span>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={imgSrc === "" ? image : imgSrc} alt={title + " image"} />
      </div>
      <p>
        {description ? description : "This project doesn't have an description"}
      </p>
      <div className={styles.buttonsWrapper}>
        <CardsLink label="Go to GitHub" urlAddress={urlAddress} />
      </div>
    </div>
  );
};

export default WorksCard;
