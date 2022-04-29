import { Link } from "react-router-dom";
import styles from "./BlogLists.module.scss";

const BlogLists = () => {
  return (
    <div className={styles.cardsContainer}>
      {lists.map((obj: BlogItemTypes,i:number) => (
        <BlogItem
        key={obj.title+i}
          date={obj.date}
          title={obj.title}
          linkAddress={obj.linkAddress}
        />
      ))}
    </div>
  );
};

export default BlogLists;

const BlogItem = ({ date, title, linkAddress = "/" }: BlogItemTypes) => {
  return (
    <Link to={linkAddress}>
      <div title={title} className={styles.itemWrapper}>
        <span>{date.toLocaleDateString()} &bull; blog</span>
        <p>{title}</p>
        <span> &rarr;</span>
      </div>
    </Link>
  );
};

interface BlogItemTypes {
  date: Date;
  title: string;
  linkAddress?: string;
}

const lists: BlogItemTypes[] = [
  {
    date: new Date(),
    title: "First blog | This is My First Blog here.",
    linkAddress: "/",
  },
  {
    date: new Date(),
    title: "First blog | This is My First Blog here.",
    linkAddress: "/",
  },
  {
    date: new Date(),
    title: "First blog | This is My First Blog here.",
    linkAddress: "/",
  },
  {
    date: new Date(),
    title: "First blog | This is My First Blog here.",
    linkAddress: "/",
  },
  {
    date: new Date(),
    title: "First blog | This is My First Blog here.",
    linkAddress: "/",
  },
  {
    date: new Date(),
    title: "First blog | This is My First Blog here.",
    linkAddress: "/",
  },
];
