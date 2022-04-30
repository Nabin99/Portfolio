import { Link } from "react-router-dom";
import styles from "./NavItem.module.scss";
import { NavType } from "../../../types/types";

const NavItem = ({ title, toggle, active }: NavType): JSX.Element => {
  return (
    <Link
      to={`/${title === "Home" ? "" : title.toLowerCase()}`}
      title={title}
      onClick={toggle}
    >
      <div
        className={
          active ? [styles.navItem, styles.active].join(" ") : styles.navItem
        }
      >
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default NavItem;
