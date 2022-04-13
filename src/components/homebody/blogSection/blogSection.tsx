import Section from "../../common/section/section";
import styles from "./blogSection.module.scss";

const BlogSection = () => {
  return (
    <Section title="My recent Blogs">
    <div className={styles.sectionWrapper}>
      <span>Blogs</span>
      <h2>
      My Recent Blogs
      </h2>
      <p>
        Sharing is caring, I share my learnings, <br />
        So, that every one who got similar could get helps.,<br />
        You can check out my blogs if you like, here are latest ones:
      </p>
      <hr />
    </div>
      </Section>
  )
}

export default BlogSection;