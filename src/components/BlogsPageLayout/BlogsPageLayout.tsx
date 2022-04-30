import styles from "./BlogsPageLayout.module.scss";
import { BlogsDetailedTypes } from "../../types/types";
import adminImage from "../../assets/admin.jpg";
import logo from "../../assets/logo.png";
import SocialIcons from "../SocialIcons/SocialIcons";
import PageHeader from "../PageHeader/PageHeader";

const BlogsPageLayout = ({
  title,
  heading,
  description,
  children,
  adminInfo,
  recentPosts,
}: BlogsDetailedTypes) => {
  return (
    <PageHeader title={title} heading={heading} description={description}>
      <div className={styles.layout}>
        <div className={styles.boxWrapper}>
          {
            <AdminInfo
              name="Nabin Dhital"
              image={adminImage}
              adminDescription="This is Admin talking hope you like my works."
            />
          }
          {<RecentPosts />}
        </div>
        <div className={styles.blogsCards}>{children}</div>
      </div>
    </PageHeader>
  );
};

export default BlogsPageLayout;

interface AdminInfoTypes {
  name: string;
  image: string;
  adminDescription: string;
}

const AdminInfo = ({ name, image, adminDescription }: AdminInfoTypes) => {
  return (
    <div className={styles.infoContainer}>
      <h3>{name}</h3>
      <div className={styles.imageWrapper}>
        <img src={image} alt="Admin" />
      </div>
      <p>{adminDescription}</p>
      <SocialIcons />
    </div>
  );
};

const RecentPosts = () => {
  return (
    <div className={styles.recentPostsContainer}>
      <h3>Recent Posts</h3>
      <hr />
      <div className={styles.items}>
        <div>
          <img src={logo} alt="title" />
        </div>
        <div>
          <p>Title example</p>
          <span>{new Date().toDateString()}</span>
        </div>
      </div>
      <div className={styles.items}>
        <div>
          <img src={logo} alt="title" />
        </div>
        <div>
          <p>Title example</p>
          <span>{new Date().toDateString()}</span>
        </div>
      </div>
      <div className={styles.items}>
        <div>
          <img src={logo} alt="title" />
        </div>
        <div>
          <p>Title example</p>
          <span>{new Date().toDateString()}</span>
        </div>
      </div>
      <div className={styles.items}>
        <div>
          <img src={logo} alt="title" />
        </div>
        <div>
          <p>Title example</p>
          <span>{new Date().toDateString()}</span>
        </div>
      </div>
      <div className={styles.items}>
        <div>
          <img src={logo} alt="title" />
        </div>
        <div>
          <p>Title example</p>
          <span>{new Date().toDateString()}</span>
        </div>
      </div>
    </div>
  );
};
