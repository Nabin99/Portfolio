import Section from "../../components/common/Section/Section";
import styles from "./About.module.scss";
import adminImg from "../../assets/png/about.png";

const About = () => {
  return (
    <Section title="My Contact Page">
    <div className={styles.pageWrapper}>
      <h1>About Me</h1>
      <p>These are the list of all the wroks I have done or involve with.</p>
      <hr />
      <div className={styles.aboutBox}>
        <AboutImage image={adminImg}/>
        <div className={styles.infoContainer}>
          <h2>Hi, There,
              <br />
              It's me Nabin Dhital.
          </h2>
          <p>
          I am currently a student of Bsc. CSIT at Patan Multiple Campus and a Software Engineering Traine at Optimum Futurist. <br />
          I{'’'}ve always been someone who has both a creative and a logical side. When I discovered web design in college, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code. As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.
          </p>
      </div>
      </div>
     
    </div>
  </Section>
    );
};
export default About;

interface AboutImageTypes{
  image: string;

}

const AboutImage = ({image}:AboutImageTypes) =>{
  return(
    <div className={styles.imageWrapper}>
        <img src={image} alt="admin" />
    </div>
  )
}
