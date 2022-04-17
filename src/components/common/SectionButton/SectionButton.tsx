import { Link } from "react-router-dom";
import styles from "./SectionButton.module.scss";

const SectionButton = ({
  urlAddress,
  label,
}: {
  urlAddress: string;
  label: string;
}) => {
  return (
    <Link className={styles.linkButton} to={urlAddress} title={label}>
      {label}
    </Link>
  );
};
export default SectionButton;
