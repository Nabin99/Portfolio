import CardsLink from "../CardsLink/CardsLink";
import styles from "./WorksCard.module.scss";
import { workfallbackImg, logoImg } from "../../../constants/imageProvider";
import { WorksCardTypes } from "../../../types/types";

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
      <div className={styles.imageWrapper}>
        <img
          src={imgSrc === "" ? workfallbackImg : imgSrc}
          alt={title + " image"}
        />
      </div>
      <div className={styles.titleWrapper}>
        <div className={styles.icons}>
          <img src={iconSrc === "" ? logoImg : iconSrc} alt="icon" />
        </div>
        <div>
          <h3 title={title}>{title.toUpperCase()}</h3>
          <span>{new Date(createdAt).toDateString()}</span>
        </div>
      </div>

      <p>
        {description ? description : "This project doesn't have an description"}
      </p>
      <div className={styles.buttonsWrapper}>
        <CardsLink label="Go to Site" urlAddress={urlAddress} />
      </div>
    </div>
  );
};

export default WorksCard;
