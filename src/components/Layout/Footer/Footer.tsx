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
            <SvgIcon title="Instagram Icon">{SvgProvider.instagram}</SvgIcon>
            <SvgIcon title="Facebook Icon">{SvgProvider.facebook}</SvgIcon>
            <SvgIcon title="Twitter Icon">{SvgProvider.twitter}</SvgIcon>
            <SvgIcon title="LinkedIn Icon">{SvgProvider.linkedin}</SvgIcon>
            <SvgIcon title="GitHub Icon">{SvgProvider.github}</SvgIcon>
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
              Rights Reserved
            </small>
          </p>
        </div>
      </Section>
    </footer>
  );
};

export default FooterSection;
