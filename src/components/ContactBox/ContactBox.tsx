import ContactForm from "../ContactForm/ContactForm";
import styles from "./ContactBox.module.scss";
import SvgProvider from "../../constants/SvgProvider";
import PageHeader from "../PageHeader/PageHeader";

interface ContactBoxTypes {
  title: string;
  heading: string;
  description: string;
}

const ContactBox = ({ title, heading, description }: ContactBoxTypes) => {
  return (
    <PageHeader title={title} heading={heading} description={description}>
      <div className={styles.layout}>
        <div className={styles.formWrapper}>
          <ContactForm />
        </div>
        <div className={styles.iconsWrapper}>
          <SocialIcons
            title="GitHub"
            icon={SvgProvider.github}
            address="https://github.com/Nabin99"
          />
          <SocialIcons
            title="LinkedIn"
            icon={SvgProvider.linkedin}
            address="https://www.linkedin.com/in/nabin-dhital-a8ba64234"
          />
          <SocialIcons
            title="Facebook"
            icon={SvgProvider.facebook}
            address="https://www.facebook.com/nabin.dhital.56"
          />
          <SocialIcons
            title="Instagram"
            icon={SvgProvider.instagram}
            address="https://www.instagram.com/dhitalnabin11/"
          />
          <SocialIcons
            title="Twitter"
            icon={SvgProvider.twitter}
            address="https://twitter.com/dhitalnabin111?t=5TKgyPYJKs45rsoRdjwpIA&s=09"
          />
          <SocialIcons title="Mail" icon={SvgProvider.mail} />
        </div>
      </div>
    </PageHeader>
  );
};

export default ContactBox;

interface SocialIconsTypes {
  title: string;
  icon: JSX.Element;
  address?: string;
}

const SocialIcons = ({ title, icon, address }: SocialIconsTypes) => {
  return (
    <a
      href={address ? address : "mailto:dhitalnabin11@gmail.com"}
      target="_blank"
      rel="noreferrer"
      title={title}
      className={styles.link}
    >
      <div className={styles.iconBox}>
        {icon}
        <h3>{title}</h3>
      </div>
    </a>
  );
};
