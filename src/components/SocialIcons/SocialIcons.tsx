import React from "react";
import SvgIcon from "../common/SvgIcon/SvgIcon";
import styles from "./SocialIcons.module.scss";
import SvgProvider from "../../constants/SvgProvider";

const SocialIcons = ({ theme = "auto" }) => {
  return (
    <div
      className={theme === "auto" ? styles.iconWrapper : styles.iconWrapperDark}
    >
      <SvgIcon
        title="Instagram Icon"
        address="https://www.instagram.com/dhitalnabin11/"
      >
        {SvgProvider.instagram}
      </SvgIcon>
      <SvgIcon
        title="Facebook Icon"
        address="https://www.facebook.com/nabin.dhital.56"
      >
        {SvgProvider.facebook}
      </SvgIcon>
      <SvgIcon
        title="Twitter Icon"
        address="https://twitter.com/dhitalnabin111?t=5TKgyPYJKs45rsoRdjwpIA&s=09"
      >
        {SvgProvider.twitter}
      </SvgIcon>
      <SvgIcon
        title="LinkedIn Icon"
        address="https://www.linkedin.com/in/nabin-dhital-a8ba64234"
      >
        {SvgProvider.linkedin}
      </SvgIcon>
      <SvgIcon title="GitHub Icon" address="https://github.com/Nabin99">
        {SvgProvider.github}
      </SvgIcon>
    </div>
  );
};

export default SocialIcons;
