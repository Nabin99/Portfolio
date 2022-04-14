import CardsLink from "../common/CardsLink/CardsLink";
import styles from "./WorksCard.module.scss";

interface WorksCardTypes {
  title: string;
  secondaryText: string;
  imgSrc: string;
  description: string;
  urlAddress: string;
  iconSrc: string;
}

const WorksCard = ({
  title,
  secondaryText,
  imgSrc,
  description,
  urlAddress,
  iconSrc,
}: WorksCardTypes) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.icons}>
          <img src={iconSrc} alt="icon" />
        </div>
        <div>
          <h3 title={title}>{title}</h3>
          <span>{secondaryText}</span>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={imgSrc} alt={title + " image"} />
      </div>
      <p>{description}</p>
      <div className={styles.buttonsWrapper}>
        <CardsLink label="Go to GitHub" urlAddress={urlAddress} />
      </div>
    </div>
  );
};

export default WorksCard;
