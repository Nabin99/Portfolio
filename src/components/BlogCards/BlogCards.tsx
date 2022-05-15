import SvgProvider from "../../constants/SvgProvider";
import styles from "./BlogCards.module.scss";
import { workfallbackImg } from "../../constants/imageProvider";
import { Link } from "react-router-dom";

interface BlogCardsTypes {
  heading: string;
  paragraph: string;
  image: string;
  createdAt: Date;
}

const BlogCards = ({ heading, paragraph, image }: BlogCardsTypes) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={image && workfallbackImg} alt={heading} />
      </div>
      <div className={styles.tags}>
        {SvgProvider.userIcon} <span>Admin</span> {SvgProvider.calender}
        <span>{new Date().toDateString()}</span>
      </div>
      <Link to={"/blog"}>
        <h2>{heading}</h2>
      </Link>
      <p>{paragraph}</p>
    </div>
  );
};

export default BlogCards;
