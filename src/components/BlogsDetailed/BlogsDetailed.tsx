import styles from "./BlogsDetailed.module.scss";
import Section from "../common/Section/Section";
import { BlogsDetailedTypes } from "../../types/types";
import SvgIcon from "../common/SvgIcon/SvgIcon";
import SvgProvider from "../../constants/SvgProvider";
import adminImage from "../../assets/jpg/admin.jpg";
import logo from  "../../assets/png/logo.png";

const BlogsDetailed = ({
  title,
  description,
  children,
  adminInfo,
  recentPosts,
}: BlogsDetailedTypes) => {
  return (
    <Section title="My Blogs">
      <div className={styles.pageWrapper}>
        <h1>{title}</h1>
        <p>{description}</p>
        <hr />
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
      </div>
    </Section>
  );
};

export default BlogsDetailed;

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
      <div className={styles.iconsWrapper}>
              <SvgIcon title="Instagram Icon" address="https://www.instagram.com/dhitalnabin11/">{SvgProvider.instagram}</SvgIcon>
              <SvgIcon title="Facebook Icon" address="https://www.facebook.com/nabin.dhital.56">{SvgProvider.facebook}</SvgIcon>
              <SvgIcon title="Twitter Icon" address="https://twitter.com/dhitalnabin111?t=5TKgyPYJKs45rsoRdjwpIA&s=09">{SvgProvider.twitter}</SvgIcon>
              <SvgIcon title="LinkedIn Icon" address="https://www.linkedin.com/in/nabin-dhital-a8ba64234">{SvgProvider.linkedin}</SvgIcon>
              <SvgIcon title="GitHub Icon" address="https://github.com/Nabin99">{SvgProvider.github}</SvgIcon>
            
      </div>
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
