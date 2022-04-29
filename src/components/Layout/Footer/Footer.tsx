import Section from "../../common/Section/Section";
import styles from "./Footer.module.scss";
import SvgIcon from "../../common/SvgIcon/SvgIcon";
import SvgProvider from "../../../constants/SvgProvider";

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
          <div className={styles.iconsWrapper}>
              <SvgIcon title="Instagram Icon" address="https://www.instagram.com/dhitalnabin11/">{SvgProvider.instagram}</SvgIcon>
              <SvgIcon title="Facebook Icon" address="https://www.facebook.com/nabin.dhital.56">{SvgProvider.facebook}</SvgIcon>
              <SvgIcon title="Twitter Icon" address="https://twitter.com/dhitalnabin111?t=5TKgyPYJKs45rsoRdjwpIA&s=09">{SvgProvider.twitter}</SvgIcon>
              <SvgIcon title="LinkedIn Icon" address="https://www.linkedin.com/in/nabin-dhital-a8ba64234">{SvgProvider.linkedin}</SvgIcon>
              <SvgIcon title="GitHub Icon" address="https://github.com/Nabin99">{SvgProvider.github}</SvgIcon>
            
          </div>
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
