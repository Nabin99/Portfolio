import styles from "./SvgIcon.module.scss";
import { SvgIconTypes } from "../../../types/types";

const SvgIcon = ({ title, children, address }: SvgIconTypes) => {
  return (
    <a href={address} title={title}>
      <div className={styles.imageWrapper}>{children}</div>
    </a>
  );
};

export default SvgIcon;
