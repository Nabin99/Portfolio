import Section from "../../common/Section/Section";
import styles from "./Footer.module.scss";
import SvgProvider from "../../../constants/SvgProvider";
import SocialIcons from "../../SocialIcons/SocialIcons";

const FooterSection = () => {
  return (
    <footer
      title={`Nabin Dhital${"'"}s footer section`}
      className={styles.footer}
    >
      <Section title="footer">
        <div className={styles.footerWrapper}>
          <div title="logo" className={styles.logoWrapper}>
            {SvgProvider.logo}
            <h2>Nabin Dhital</h2>
          </div>
          <p>Thanks for scrolling, that's all folks.</p>
          <SocialIcons theme="dark" />
          <p>
            <br />
            <br />
            Build from <span className={styles.heart}> &#x2764;</span>
          </p>

          <p>
            <br />
            <small>
              &copy; Copyright {new Date().getFullYear()} Nabin Dhital. All
              Rights Reserved.
            </small>
          </p>
        </div>
      </Section>
    </footer>
  );
};

export default FooterSection;
