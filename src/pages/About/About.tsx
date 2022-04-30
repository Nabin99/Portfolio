import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./About.module.scss";
import adminImg from "../../assets/about.png";

const About = () => {
  return (
    <PageHeader
      title="My About Page"
      heading="About Me"
      description="Here you can learn in details about me."
    >
      <div className={styles.aboutBox}>
        <AboutImage image={adminImg} />
        <div className={styles.infoContainer}>
          <h2>
            Hi, There,
            <br />
            It's me Nabin Dhital.
          </h2>
          <p>
            I am currently a student of Bsc. CSIT at Patan Multiple Campus and a
            Software Engineering Traine at Optimum Futurist. <br /> <br /> I
            {"’"}ve always been someone who has both a creative and a logical
            side. When I discovered web design in college, I realized it would
            be the perfect fit. I could use my creative side to design and my
            logical side to code. As a bonus, being both designer and developer
            allows me to make sure no detail is lost in translation.
          </p>
        </div>
      </div>
    </PageHeader>
  );
};
export default About;

interface AboutImageTypes {
  image: string;
}

const AboutImage = ({ image }: AboutImageTypes) => {
  return (
    <div className={styles.imageWrapper}>
      <img src={image} alt="admin" />
    </div>
  );
};
