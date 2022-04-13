import Section from "../../common/Section/Section";
import styles from "./Footer.module.scss";
import logo from "../../../assests/svg/logo.svg";
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
          <div className={styles.logoWrapper}>
            <img src={logo} alt="logo" />
            <h2>Nabin Dhital</h2>
          </div>
          <p>Thanks for scrolling, that's all folks.</p>
          <div className={styles.iconsWrapper}>
            <SvgIcon title="Instagram Icon">
             {SvgProvider.instagram}
            </SvgIcon>
            <SvgIcon title="Facebook Icon">
             {SvgProvider.facebook}
            </SvgIcon>
            <SvgIcon title="Twitter Icon">
             {SvgProvider.twitter}
            </SvgIcon>
            <SvgIcon title="LinkedIn Icon">
             {SvgProvider.linkedin}
            </SvgIcon>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default FooterSection;
