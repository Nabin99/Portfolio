import { Link } from "react-router-dom";
import styles from "./NavItem.module.scss";

type NavType = {
  title: string;
  toggle: () => void;
};

const NavItem = ({ title, toggle }: NavType): JSX.Element => {
  return (
    <Link
      to={`/${title === "Home" ? "" : title.toLowerCase()}`}
      title={title}
      onClick={toggle}
    >
      <div className={styles.navItem}>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default NavItem;
